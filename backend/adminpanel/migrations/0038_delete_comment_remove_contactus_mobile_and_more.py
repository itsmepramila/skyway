# Generated by Django 5.0 on 2024-01-02 07:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0037_remove_navigation_desc_navigation_short_desc1_and_more'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Comment',
        ),
        migrations.RemoveField(
            model_name='contactus',
            name='mobile',
        ),
        migrations.AlterField(
            model_name='navigation',
            name='page_type',
            field=models.CharField(blank=True, choices=[('Home', 'Home'), ('Home/Banner', 'Home/Banner'), ('Home/Video', 'Home/Video'), ('About Us', 'About Us'), ('MESSAGE FROM CHAIRMAN', 'MESSAGE FROM CHAIRMAN'), ('MESSAGE FROM DIRECTOR', 'MESSAGE FROM DIRECTOR'), ('Our Valuable Clients', 'Our Valuable Clients'), ('Sectors We Work In', 'Sectors We Work In'), ('Operating Procedure', 'Operating Procedure'), ('What Our Clients Say', 'What Our Clients Say'), ('Our Clients', 'Our Clients'), ('Countries', 'Countries'), ('License', 'License'), ('Newspaper', 'Newspaper'), ('About Nepal', 'About Nepal'), ('Gallery', 'Gallery')], max_length=50, null=True),
        ),
    ]