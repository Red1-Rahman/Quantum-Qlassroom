Quantum Qlassroom
Redwan Rahman, Sarah Tasnim Diya

Quantum Qlassroom is an educational mobile application that combines quantum computing education with interactive simulations. The project uses React Native for the frontend and Django for the backend, creating a full-stack application for learning quantum computing concepts.
In addition to offering lessons, quizzes, and circuit building tools, the app features a machine learning model designed to predict quantum states based on user-generated quantum circuits. The ml predictor uses a TensorFlow model to predict the output states of quantum circuits, helping users understand the effects of various quantum gates applied to qubits.

Frontend (Mobile)
React Native - Main mobile app development framework
Key libraries:
@react-navigation - For navigation and routing
@react-native-async-storage - For local storage
axios - For HTTP requests
Core React Native components like View, Text, Button, etc.

Backend
Django - Main backend framework
Key components:
Django REST Framework - For building REST APIs
djangorestframework-simplejwt - For JWT authentication
django-cors-headers - For handling CORS

Quantum Computing
Qiskit - IBM's quantum computing framework
Features:
Quantum circuit simulation
Basic quantum gates (H, X, Z)
QASM simulator

Machine Learning
TensorFlow - For quantum state prediction
Components:
Neural network with Dense layers
Categorical crossentropy loss
Adam optimizer

Database
SQLite - Default database for development
PostgreSQL support (via psycopg2-binary)
Authentication & Security
Token-based authentication
Django's built-in user management
CORS protection

Development Tools
Visual Studio Code - IDE
Project structure:
E:.
│   README.md
│
├───backend
│   │   manage.py
│   │   requirements.txt
│   │
│   ├───quantum_api
│   │       ml_predictor.py
│   │       models.py
│   │       quantum_simulator.py
│   │       serializers.py
│   │       urls.py
│   │       views.py
│   │       __init__.py
│   │
│   └───quantum_qlassroom
│           settings.py
│           urls.py
│           wsgi.py
│           __init__.py
│
└───mobile
    │   App.js
    │   config.js
    │   package.json
    │
    ├───assets
    ├───components
    │       CircuitBuilder.js
    │       LessonCard.js
    │
    └───screens
            CircuitSimulatorScreen.js
            HomeScreen.js
            LessonScreen.js
            LoginScreen.js
            QuizScreen.js
            RegisterScreen.js

API Endpoints
/api/login/ - User authentication
/api/register/ - User registration
/api/simulate/ - Quantum circuit simulation
/api/profile/ - User profile management
