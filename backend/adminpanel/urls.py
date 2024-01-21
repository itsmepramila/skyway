from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("", admin_login, name="admin_login"),
    path("dashboard/", dashboard, name="dashboard"),
    path("logout/", Logoutpage, name="logout"),
    path("globalsetting/", globalsetting, name="globalsetting"),
    path("contactus/", contactus, name="contactus"),
    path("delete_contact", delete_contact, name="delete_contact"),
    path("main_navigation/<int:parent_id>/", main_navigation, name="main_navigation"),
    path("main_navigation/", main_navigation, name="main_navigation"),
    path("navigation/", navigation_list, name="navigation"),
    path("navigation/<int:parent_id>/", navigation_list, name="navigation"),
    path("update/<int:pk>/", update, name="update"),
    path("delete_nav/<int:pk>/", delete_nav, name="delete_nav"),
    path("applynow/", applynow, name="applynow"),
    path("delete_applynow/", delete_applynow, name="delete_applynow"),
    path("application/<int:pk>/", application, name="application"),
    
    # path('search/', search_results, name='search')
]
