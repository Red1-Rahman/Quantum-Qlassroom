from django.db import models
from django.contrib.auth.models import User

class Simulation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    circuit_data = models.JSONField()
    result = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)
