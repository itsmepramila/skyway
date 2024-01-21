from tokenize import Comment
from .serializers import *
from rest_framework import viewsets
from rest_framework.views import APIView
from django.http import Http404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from django.shortcuts import redirect,HttpResponse
# ViewSets define the view behavior.


class GlobalViewSet(viewsets.ModelViewSet):
    queryset = GlobalSettings.objects.all() 
    serializer_class = GlobalSettingsSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = (TokenAuthentication)


class GlobalSettings(APIView):
    """
    Retrieve, update or delete a snippet instance.

    """
    def get_object(self, pk):
        try:
            return GlobalSettings.objects.get(pk=pk)
        except GlobalSettings.DoesNotExists:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = GlobalSettingsSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = GlobalSettingsSerializer(snippet,data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def post(self,request, format=None):
        serializer = GlobalSettingsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class NavigationViewSet(viewsets.ModelViewSet):
    queryset = Navigation.objects.all()
    serializer_class = NavigationSerializer

class Navigation(APIView):
    """
    Retrieve, update or delete a snippet instance.

    """
    def get_object(self, pk):
        try:
            return Navigation.objects.get(pk=pk)
        except Navigation.DoesNotExists:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = NavigationSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = NavigationSerializer(snippet,data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def post(self,request, format=None):
        serializer = NavigationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ContactViewSet(viewsets.ModelViewSet):
    queryset = ContactUS.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        # print(request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Contact form data received'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   
class contactUS(APIView):
    """
    Retrieve, update or delete a snippet instance.

    """
    
    def get_object(self, pk):
        try:
            return ContactUS.objects.get(pk=pk)
        except ContactUS.DoesNotExists:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = ContactSerializer(snippet)
        return Response(serializer.data)


class ApplyNowViewSet(viewsets.ModelViewSet):
    queryset = ApplyNow.objects.all()
    serializer_class = ApplyNowSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        # print(request.data)

        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'applynow form data received'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

   
class ApplyNow(APIView):
    """
    Retrieve, update or delete a snippet instance.

    """
  
    
    def get_object(self, pk):
        try:
            return ApplyNow.objects.get(pk=pk)
        except ApplyNow.DoesNotExists:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = ApplyNowSerializer(snippet)
        return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer



