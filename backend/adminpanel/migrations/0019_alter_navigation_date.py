# Generated by Django 4.1.4 on 2023-12-26 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0018_alter_navigation_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='navigation',
            name='date',
            field=models.DateField(default=None, null=True),
        ),
    ]