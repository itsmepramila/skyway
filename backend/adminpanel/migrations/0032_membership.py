# Generated by Django 4.1.4 on 2023-12-27 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0031_remove_contactus_mobileno_remove_contactus_subject'),
    ]

    operations = [
        migrations.CreateModel(
            name='Membership',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('mobile', models.CharField(max_length=100)),
                ('Gender', models.CharField(max_length=100)),
                ('date', models.CharField(max_length=100)),
                ('citizenship', models.CharField(max_length=100)),
                ('issued_district', models.CharField(max_length=50)),
                ('province', models.CharField(max_length=100)),
                ('district', models.CharField(max_length=100)),
                ('muncipality', models.CharField(max_length=100)),
                ('ward', models.CharField(max_length=50)),
                ('fathers_name', models.CharField(max_length=100)),
            ],
        ),
    ]