# Generated by Django 5.0 on 2024-01-02 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0038_delete_comment_remove_contactus_mobile_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='globalsettings',
            name='ContactTitle',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='globalsettings',
            name='ContactTitle1',
            field=models.CharField(max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='globalsettings',
            name='SiteContact1',
            field=models.CharField(max_length=100, null=True),
        ),
    ]
