from django.db import models
from django.utils import timezone

class GlobalSettings(models.Model):
    SiteName = models.CharField(max_length=100,null =True)
    SiteContact = models.CharField(max_length=100,null =True)
    SiteContact1 = models.CharField(max_length=100,null =True)
    SiteEmail = models.EmailField()
    Sitelicence = models.CharField(max_length=300, null=True)
    SiteRegister= models.CharField(max_length=100,null=True)
    SiteAddress = models.CharField(max_length=500,null =True)
    Sitedescription = models.CharField(max_length=500,null =True)
    Sitewhatsapplink = models.CharField(max_length=300,null =True)
    Sitefacebooklink = models.CharField(max_length=300,null =True)
    ContactTitle1 = models.CharField(max_length=300,null =True)
    ContactTitle2 = models.CharField(max_length=300,null =True)
    EstablishedDate = models.CharField(max_length=300,null =True)
    Sitemessengerlink = models.CharField(max_length=300,null =True)
    logo = models.ImageField(upload_to="Global/",max_length=200, null=True,default=None)
    back_image = models.ImageField(upload_to="Global/",null=True)
    brochure = models.FileField(upload_to="brochure/",null=True)
    broc_name =models.CharField(max_length=100,null=True)
    def __str__(self):
        return self.SiteName

class ContactUS(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    message = models.TextField(null=True)
    
    def __str__(self):
        return self.name

class Navigation(models.Model):
    PAGE_TYPE = (
        ('Home', 'Home'),('Home/Banner','Home/Banner'),('Home/Video','Home/Video'), ("About Us", "About Us"),
        ("MESSAGE FROM CHAIRMAN", "MESSAGE FROM CHAIRMAN"), ("MESSAGE FROM DIRECTOR", "MESSAGE FROM DIRECTOR"),
        ("Our Valuable Clients", "Our Valuable Clients"), ("Sectors We Work In", "Sectors We Work In"),
        ("Operating Procedure", "Operating Procedure"), ("What Our Clients Say", "What Our Clients Say"), ("Our Clients", "Our Clients"),
        ("Countries", "Countries"), ("License", "License"), ("Newspaper", "Newspaper"), ("About Nepal", "About Nepal"),
        ("Gallery", "Gallery"), ("Our Strengths", "Our Strengths"), ("Diverse sectors", "Diverse sectors"), ("Training facility", "Training facility"),
        ("Dedicated database", "Dedicated database"), ("Connect talents", "Connect talents"), ("Skill test programs", "Skill test programs"),
        ("Excellent management", "Excellent management"), ("Ethical Recruitment", "Ethical Recruitment"), ("Respect human rights", "Respect human rights"),
        ("About Us1", "About Us1"), ("Choose Us", "Choose Us"), ("Our Mission", "Our Mission"), ("Our Vision", "Our Vision"), ("Latest Jobs", "Latest Jobs"),
        ("Our Team", "Our Team"), ("Key", "Key"), ("Value", "Value"), ("Point", "Point"), ("Point1", "Point1"),
    )

    STATUS = (
        ('Publish', 'Publish'),
        ('Draft', 'Draft')
    )
    name = models.CharField(max_length=100, null=False)
    caption = models.CharField(max_length=100,null=True)
    status = models.CharField(choices=STATUS, max_length=50)
    position = models.IntegerField()
    page_type = models.CharField(choices=PAGE_TYPE, null=True, blank=True, max_length=50)
    title = models.CharField(max_length=200)
    meta_keyword = models.CharField(max_length=200, null=True)
    meta_title = models.CharField(max_length=200, null=True)
    short_desc = models.TextField(default="")
    short_desc1 = models.TextField(default="")
    short_desc2 = models.TextField(default="")
    short_desc3 = models.TextField(default="")
    bannerimage = models.ImageField(upload_to="about/",null=True)   
    Parent = models.ForeignKey('self', related_name="childs", on_delete=models.CASCADE, null=True, blank=True)
    date = models.DateField(null=True, blank=True)
    def __str__(self):
        return self.name
  
class ApplyNow(models.Model):
    # Personal Information
    jobCode = models.CharField(max_length=10, unique=True)
    fullName = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    nationality = models.CharField(max_length=50)
    passportNumber = models.CharField(max_length=20, unique=True)
    gender = models.CharField(max_length=100)
    placeOfIssue = models.CharField(max_length=100)
    expiryDate = models.DateField()
    dateOfBirth = models.DateField()
    height = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    weight = models.DecimalField(max_digits=5, decimal_places=2, null=True, blank=True)
    maritalStatus = models.CharField(max_length=100)
    children = models.PositiveIntegerField(default=0)
    religion = models.CharField(max_length=50, null=True, blank=True)
    
    # qualification
    arabic_speaking = models.CharField(max_length=100)
    arabic_listening = models.CharField(max_length=100)
    arabic_reading = models.CharField(max_length=100)
    arabic_writing = models.CharField(max_length=100)
    english_speaking = models.CharField(max_length=100)
    english_listening = models.CharField(max_length=100)
    english_reading = models.CharField(max_length=100)
    english_writing = models.CharField(max_length=100)
    hindi_speaking = models.CharField(max_length=100)
    hindi_listening = models.CharField(max_length=100)
    hindi_reading = models.CharField(max_length=100)
    hindi_writing = models.CharField(max_length=100)
    education = models.CharField(max_length=50)
    field_nepal = models.CharField(max_length=50)
    employer_nepal = models.CharField(max_length=50)
    duration_nepal = models.CharField(max_length=100)
    address_nepal = models.TextField()
    field_overseas = models.CharField(max_length=50)
    employer_overseas = models.CharField(max_length=50)
    duration_overseas = models.CharField(max_length=100)
    country_overseas = models.TextField()
    otherSkills = models.CharField(max_length=100, null=True)
    
    # Contact Information 
    agentName = models.CharField(max_length=100)
    phoneNumber = models.CharField(max_length=15)  
    email = models.EmailField()
    homeNumber = models.CharField(max_length=15)  
    relativesNumber = models.CharField(max_length=15)
    def __str__(self):
        return self.full_name  