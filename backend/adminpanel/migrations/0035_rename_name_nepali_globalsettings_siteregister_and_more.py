# Generated by Django 5.0 on 2023-12-29 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminpanel', '0034_navigation_video_link'),
    ]

    operations = [
        migrations.RenameField(
            model_name='globalsettings',
            old_name='name_nepali',
            new_name='SiteRegister',
        ),
        migrations.RenameField(
            model_name='globalsettings',
            old_name='Sitefax',
            new_name='Sitemessengerlink',
        ),
        migrations.RenameField(
            model_name='globalsettings',
            old_name='Sitetwitterlink',
            new_name='Sitewhatsapplink',
        ),
        migrations.RemoveField(
            model_name='globalsettings',
            name='Siteyoutubelink',
        ),
        migrations.RemoveField(
            model_name='globalsettings',
            name='flag_logo',
        ),
        migrations.AddField(
            model_name='globalsettings',
            name='Sitelicence',
            field=models.CharField(default=2, max_length=300),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='globalsettings',
            name='broc_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='globalsettings',
            name='brochure',
            field=models.FileField(null=True, upload_to='brochure/'),
        ),
    ]