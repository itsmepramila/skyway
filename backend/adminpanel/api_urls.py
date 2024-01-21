from rest_framework import routers
from django.urls import path, include
from .api_views import *


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()

router.register(r'users',UserViewSet)
router.register(r'globals', GlobalViewSet)
router.register(r'navigations', NavigationViewSet)
router.register(r'contacts',ContactViewSet)
router.register(r'applynow',ApplyNowViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('global/<int:pk>',GlobalSettings.as_view(),name='global'),   
    path('navigation/<int:pk>',Navigation.as_view(),name='navigation'),
    path('contactUs/<int:pk>',contactUS.as_view(),name='contactUs'),
    path('applynow/<int:pk>',ApplyNow.as_view(),name='applynow'),
    
]