# Generated by Django 5.0 on 2024-01-17 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0055_remove_navigation_short_desc_navigation_short_desc2_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='navigation',
            name='short_desc',
            field=models.TextField(default=''),
        ),
    ]
