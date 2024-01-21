from django.shortcuts import render,redirect, get_object_or_404
from django.http import HttpResponseRedirect, HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .models import GlobalSettings, ContactUS, Navigation, ApplyNow
from django.contrib.auth.decorators import login_required
from django.conf import settings
from django.core.paginator import Paginator
from django.views.generic import View
import os
from django.utils import timezone
# from .models import Apply

class ReactAppView(View):

    def get(self, request):
        try:

            with open(os.path.join(settings.REACT_APP, 'dist', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                """
                index.html not found ! build your React app !!
                """,
                status=501,
            )

def admin_login(request):
    glob = GlobalSettings.objects.all()
    try:
        # messages.info(request, 'Account not found')
        if request.method == 'POST':
            username = request.POST.get("username")
            password = request.POST.get("password")         
            user_obj = User.objects.filter(username = username)
            
            if not user_obj.exists():
                messages.info(request, "Account not found")
                return HttpResponseRedirect(request.META.get("HTTP_REFERER"))
            print(username, password)
            user_obj = authenticate(username = username, password = password)

            if user_obj and user_obj.is_superuser:
                login(request, user_obj)
                return redirect("dashboard")
          
            messages.info(request, "Invalid password")
            return redirect('/')
                    
        return render(request, "login.html", {'glob':glob})
       
    except Exception as e:
        print(e)
        # Add a proper response in case of an exception
        return HttpResponse("An error occurred")

@login_required(login_url=settings.LOGIN_URL)
def dashboard(request):
    glob = GlobalSettings.objects.all()

    return render(request, "dashboard.html", {'glob':glob})

def Logoutpage(request):
    logout(request)
    return redirect("admin_login")

@login_required(login_url=settings.LOGIN_URL)
def globalsetting(request):
    glob = GlobalSettings.objects.all()
    try:
        data = GlobalSettings.objects.first()
    except GlobalSettings.DoesNotExist:
        data = None

    if request.method == "POST":
        name = request.POST.get('name')
        contact = request.POST.get('contact')
        contact1 = request.POST.get('contact1')
        address = request.POST.get('address')
        email = request.POST.get('email')
        licence = request.POST.get('licence')
        register_no = request.POST.get('register_no')
        description = request.POST.get('description')
        whatsapplink = request.POST.get('whatsapplink')
        facebooklink = request.POST.get('facebooklink')
        contacttitle1 = request.POST.get('contacttitle1')
        contacttitle2 = request.POST.get('contacttitle2')
        established_date = request.POST.get('established_date')
        messengerlink = request.POST.get('messengerlink')
        logo = request.FILES.get('logo')
        back_image = request.FILES.get('back_image')
        brochure = request.FILES.get('brochure')
        broc_name = request.POST.get('broc_name')
        

        if data is None:
            # Create a new GlobalSettings object
            data = GlobalSettings(SiteName=name,
                                  SiteContact=contact, 
                                  SiteContact1=contact1,                               
                                  SiteEmail=email,
                                  Sitelicence=licence,
                                  SiteRegister=register_no,
                                  SiteAddress=address,
                                  Sitedescription=description,
                                  Sitewhatsapplink=whatsapplink,
                                  Sitefacebooklink=facebooklink,
                                 ContactTitle1=contacttitle1,
                                 ContactTitle2=contacttitle2,
                                 EstablishedDate=established_date,  
                                 Sitemessengerlink=messengerlink,
                                  broc_name=broc_name,                                
            )
        else:
            # Update existing GlobalSettings object
            data.SiteName = name
            data.SiteContact = contact
            data.SiteContact1 = contact1
            data.SiteEmail = email
            data.Sitelicence=licence
            data.SiteRegister=register_no
            data.SiteAddress = address            
            data.Sitedescription = description
            data.Sitewhatsapplink=whatsapplink
            data.Sitefacebooklink = facebooklink
            data.ContactTitle1 = contacttitle1
            data.ContactTitle2 = contacttitle2
            data.EstablishedDate = established_date
            data.Sitemessengerlink = messengerlink
            data.broc_name = broc_name
            

        if logo:
            # Set the uploaded image to the 'logo' field
            data.logo = logo

            
        if back_image:
            data.back_image = back_image
            
        if brochure:
            # Set the uploaded image to the 'logo' field
            data.brochure = brochure
        
        data.save()

        return redirect('globalsetting')  # Redirect to the same view after saving the data

    return render(request, "globalsetting.html", {"data": data, 'glob' : glob})

@login_required(login_url=settings.LOGIN_URL)
def contactus(request):
    glob = GlobalSettings.objects.all()
    con=ContactUS.objects.all()
    query = request.GET.get('q')
    results = None
    
    if query:
        results = ContactUS.objects.filter(name__icontains=query)
    

    dels = ContactUS.objects.all()
    dels = dels.order_by('-id')
    paginator = Paginator(dels, 10)  # Show 6 contacts per page.

    page_number = request.GET.get("page")
    page_obj = paginator.get_page(page_number)
 
    return render(request, "contactus.html",{'con':con, 'glob' : glob, 'page_obj':page_obj,'results':results})

@login_required(login_url=settings.LOGIN_URL)
def delete_contact(request):
    if request.method == "POST":
        # Check if "selected_items" is in the POST data
        selected_items = request.POST.getlist('selected_items[]')
        
        if selected_items:
            # Loop through the selected items and delete them
            for item_pk in selected_items:
                con = get_object_or_404(ContactUS, pk=item_pk)
                con.delete()

    return redirect('contactus')
  
def applynow(request):
    glob = GlobalSettings.objects.all()
    con = ApplyNow.objects.all()
    query = request.GET.get('q')
    results = None
    
    if query:
        results = ApplyNow.objects.filter(name__icontains=query)
    

    dels = ApplyNow.objects.all()
    dels = dels.order_by('-id')
    paginator = Paginator(dels, 10)  # Show 6 contacts per page.

    page_number = request.GET.get("page")
    page_obj = paginator.get_page(page_number)
 
    return render(request, "applynow.html",{'con':con, 'glob' : glob, 'page_obj':page_obj,'results':results})

@login_required(login_url=settings.LOGIN_URL)
def delete_applynow(request):
    if request.method == "POST":
        # Check if "selected_items" is in the POST data
        selected_items = request.POST.getlist('selected_items[]')
        
        if selected_items:
            # Loop through the selected items and delete them
            for item_pk in selected_items:
                con = get_object_or_404(ApplyNow, pk=item_pk)
                con.delete()

    return redirect('applynow')

@login_required(login_url=settings.LOGIN_URL)
def application(request,pk):
    glob = GlobalSettings.objects.all()
    # app= Apply.objects.all()
    app = get_object_or_404(ApplyNow, pk=pk)
    
    return render (request,'applications.html',{'glob':glob,'app':app})

@login_required(login_url=settings.LOGIN_URL)
def main_navigation(request, parent_id=None):
    glob=GlobalSettings.objects.all()
    query = request.GET.get('q')
    results = None
    
    if query:
        results = Navigation.objects.filter(name__icontains=query)
        
    if parent_id:
        obj = Navigation.objects.filter(Parent=parent_id).order_by('position')
    else:
        obj = Navigation.objects.filter(Parent = None).order_by('position')
 
    return render(request, "main_navigation.html", {'obj':obj, 'parent_id':parent_id,'glob':glob,'results':results})

@login_required(login_url=settings.LOGIN_URL)
def navigation_list(request, parent_id=None):
    glob = GlobalSettings.objects.all()
    obj = Navigation.objects.all()

    if request.method == "POST":
        name = request.POST.get('name')
        caption = request.POST.get('caption')
        status = request.POST.get('status')
        position = request.POST.get('position')
        page_type = request.POST.get('page_type')
        title = request.POST.get('title')
        meta_title = request.POST.get('meta_title')
        meta_keyword = request.POST.get('meta_keyword')
        short_desc = request.POST.get('short_desc')
        short_desc1 = request.POST.get("short_desc1")
        short_desc2 = request.POST.get("short_desc2")
        short_desc3 = request.POST.get("short_desc3")
        bannerimage = request.FILES.get('bannerimage')
        parent_id = request.POST.get('Parent')
        date = request.POST.get('date')
        if parent_id:
            parent_navigation = Navigation.objects.get(pk=parent_id)
        else:
            parent_navigation = None    
        try:
            date_obj = timezone.datetime.strptime(date, '%Y-%m-%d')
        except ValueError:
            date_obj = None

        # Create a new Navigation objectj
        obj = Navigation.objects.create(
            name=name,
            caption=caption,
            status=status,
            position=position,
            page_type=page_type,
            title=title,
            meta_title=meta_title,
            meta_keyword=meta_keyword,
            short_desc=short_desc,
            short_desc1=short_desc1,
            short_desc2=short_desc2,
            short_desc3=short_desc3,
            date = date_obj,
            Parent=parent_navigation,  # Assign parent navigation object
        )
        # obj.Parent = Navigation.objects.filter(id=parent_id)

        # Set uploaded images
        if bannerimage:
            obj.bannerimage = bannerimage
       

        obj.save()  # Save the new Navigation object to the database

        obj = Navigation.objects.all()  # Update the navigation list with the new object

        if parent_id:
            return redirect('main_navigation', parent_id=parent_id )
        else:
            return redirect('main_navigation')
      

    return render(request, 'navigation.html',{'obj': obj, 'glob' : glob, 'parent_id':parent_id})

@login_required(login_url=settings.LOGIN_URL)
def update(request, pk):
    glob = GlobalSettings.objects.all()
    data = get_object_or_404(Navigation, pk=pk)

    if request.method == "POST":
        name=request.POST.get('name')
        caption=request.POST.get('caption')
        status=request.POST.get('status')
        position=request.POST.get('position')
        page_type=request.POST.get('page_type')
        title=request.POST.get('title')
        meta_title=request.POST.get('meta_title')
        meta_keyword=request.POST.get('meta_keyword')
        short_desc=request.POST.get('short_desc')
        short_desc1 = request.POST.get("short_desc1")
        short_desc2 = request.POST.get("short_desc2")
        short_desc3 = request.POST.get("short_desc3")
        bannerimage=request.FILES.get('bannerimage')
        parent_id = request.POST.get('Parent')
        date = request.POST.get('date')
        if parent_id:
            parent_navigation = Navigation.objects.get(pk=parent_id)
        else:
            parent_navigation = None
            
        try:
            date_obj = timezone.datetime.strptime(date, '%Y-%m-%d')
        except ValueError:
            date_obj = None

        
        # Update the object with the form data
        data.name = name
        data.caption = caption
        data.status = status
        data.position = position
        data.page_type = page_type
        data.title = title
        data.meta_title = meta_title
        data.meta_keyword = meta_keyword
        data.short_desc=short_desc
        data.short_desc1=short_desc1
        data.short_desc2=short_desc2
        data.short_desc3=short_desc3
        data.Parent=parent_navigation
        data.date=date_obj
        if bannerimage:
            data.bannerimage = bannerimage
        data.save()

        if parent_id:
            return redirect('main_navigation', parent_id=parent_id )
        else:
            return redirect('main_navigation')
        
    parent_id = data.Parent.id if data.Parent else None
    
    existing_date = data.date.strftime('%Y-%m-%d') if data.date else ''

    return render(request, 'update.html', {'data': data,'glob':glob,'parent_id':parent_id,'existing_date':existing_date})

@login_required(login_url=settings.LOGIN_URL)
def delete_nav(request, pk):
    obj = get_object_or_404(Navigation, pk=pk)
    parent_id = None

    if request.method == "POST":
        parent_id = obj.Parent.id if obj.Parent else None
        obj.delete()

    if parent_id:
        return redirect('main_navigation', parent_id=parent_id)
    else:
        return redirect('main_navigation')
    
    