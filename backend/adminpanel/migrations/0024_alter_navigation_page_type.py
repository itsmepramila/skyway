# Generated by Django 4.1.4 on 2023-12-26 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0023_alter_navigation_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navigation',
            name='page_type',
            field=models.CharField(blank=True, choices=[('Home', 'Home'), ('Home/Banner', 'Home/Banner'), ('Notice', 'Notice'), ('Major Activities', 'Major Activities'), ('About/introduction', 'About/introduction'), ('Associate Organization', 'Associate Organization'), ('Board of Directors', 'Board of Directors'), ('Chairman Message', 'Chairman Message'), ('Secretary Message', 'Secretary Message'), ('Bidhans', 'Bidhans'), ('News/Events', 'News/Events'), ('Issue/Campaigns', 'Issue/Campaigns'), ('Publications', 'Publications'), ('Membership Form', 'Membership Form'), ('Image_Gallery', 'Image_Gallery'), ('Video_Gallery', 'Video_Gallery'), ('Download', 'Download'), ('Press release', 'Press release'), ('Contact', 'Contact')], max_length=50, null=True),
        ),
    ]
