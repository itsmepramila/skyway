# Generated by Django 5.0 on 2024-01-10 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0051_rename_agents_name_applynow_agentname_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactus',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]