# Generated by Django 4.1.4 on 2023-12-24 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0005_alter_globalsettings_flag_logo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='globalsettings',
            name='flag_logo',
            field=models.ImageField(default=None, null=True, upload_to='logo/'),
        ),
    ]
