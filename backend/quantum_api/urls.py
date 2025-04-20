from django.urls import path
from .views import SimulateCircuit, RegisterUser, UserProfile, LoginUser

urlpatterns = [
    path('simulate/', SimulateCircuit.as_view(), name='simulate-circuit'),
    path('register/', RegisterUser.as_view(), name='register-user'),
    path('profile/', UserProfile.as_view(), name='user-profile'),
    path('login/', LoginUser.as_view(), name='login-user'),
]
