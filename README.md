# eventsbynandani.com Deployment steps:
1. Login to GCP Console using `mailtopankaj@gmail.com` account.
2. Open Cloud Shell Editor
3. Set Cloud Platform project for the session to EventsByNandani using `gcloud config set project static-sum-374218` command and authorize it.
4. Root directory for EventsByNandani site is `/home/mailtopankaj/EventsByNandani/WWW`
5. Go to directory of the file(s) being changed. Remove older version of file(s).
6. Upload newer version of file(s) using Upload menu. On Upload window please select new file and respective directory of the file.
7. Goto `/home/mailtopankaj/EventsByNandani/WWW` directory where `app.yaml` file is located
8. Deploy latest app code using `gcloud app deploy` command. Hit Continue and wait for process to complete.
9. New code is deployed now. Please test it by visting `https://www.eventsbynandani.com/`
10. Goto versions tab using `https://console.cloud.google.com/appengine/versions?project=static-sum-374218&serviceId=default` and delete older version of application.

