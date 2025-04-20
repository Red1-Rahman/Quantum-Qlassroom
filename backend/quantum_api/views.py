from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Simulation
from .serializers import SimulationSerializer
from .quantum_simulator import run_simulation
from .ml_predictor import predict_quantum_state  # Import the ML function
from django.contrib.auth import authenticate

class RegisterUser(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key}, status=status.HTTP_201_CREATED)

class LoginUser(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        return Response({'error': 'Invalid credentials'}, status=400)

class UserProfile(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({'username': user.username, 'email': user.email})

class SimulateCircuit(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        gates = request.data.get('gates', [])
        
        # Running the quantum simulation
        result = run_simulation(gates)
        
        # Predicting the quantum state using the ML model
        prediction = predict_quantum_state(gates)  # Using the ML function for prediction

        # Saving the simulation result in the database
        sim = Simulation.objects.create(user=request.user, circuit_data=gates, result=result)

        # Return both quantum simulation result and ML prediction
        return Response({
            'simulation_result': SimulationSerializer(sim).data,
            'prediction': prediction.tolist()  # Convert NumPy array to list for JSON serialization
        })
