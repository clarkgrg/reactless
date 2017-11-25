---
title: Deploying Gatsby on Amazon Web Services - part 2
date: "2017-11-25T06:00:00.000Z"
layout: post
draft: false
path: "/posts/gatsby-on-aws-part-2/"
category: "Serverless"
tags:
  - "Hosting"
description: "In the first post of the series we logged on our AWS account and setup our domain.  In this post we will learn how to create our S3 bucket to host our static website."
---

# Setup AWS S3 Bucket to hold our static web site

In the [first part](posts/gatsby-on-aws) of the series we logged on our AWS account and setup our domain.  In this post we will learn how to create our S3 bucket to host our static website. 

Start by logging into your AWS account.  Now select the services menu and choose S3 under the Storage section.

![S3 Storage](./S3Services.png) 

Next click the Create Bucket link.  If you've never added an S3 Bucket then your page might look different than mine.  In this case you will probably see a getting started page.  On this getting started page there should be a link to create a new bucket.

## Create a new S3 Bucket

![Create new bucket](./CreateBucket.png)

Next, we'll want to name our bucket.  In my case I want to name my bucket 'www.reactless.com'.  You can use any name you want just know these bucket names have to be unique.  

Finally select the Region that you want to use.  Likely you will choose the region closest to youself.  I typically choose US East region.  

Click the Next button.

![Name bucket](./NameBucket.png)

Click the Next button again.  We don't need versioning, tagging, or logging setup.

![Versioning](./NoVersion.png)

On the Set Permission page change Manage public permissions to "Grant public read access to this bucket".  We want everyone to be able to read the files from our static website.  

![Public Read Access](./ReadAccess.png)

Finally, review what you have entered and if it all looks correct, click the Create Bucket button.

![Create Bucket](./CreateIt.png)

Once we have the bucket created you will see it in the list of all your buckets.  Click on the bucket name and we can do some further setup.

First we'll set the property for Static Website Hosting.  Click the Properties Tab.

Click on Disable under Static website hosting.  

![Properties](./Properties.png)

From the Static website hosting card we want to first select "Use this bucket to host a website.

Next type in the index document in our case it should be "index.html"

Click the Save button.

![Static Hosting](./StaticHosting.png)

Now click on the Overview tab.  

Click the upload button so we can start uploading our files.

Copy all the files you want to upload.  I selected everything in the public folder and dragged them onto the Upload.

Click the Next button

## Upload Files to our bucket

![Upload](./Upload.png)

This next step is really important.  We set public read access to the bucket.  Now we need to set public read access to all the files in the bucket. 

To do this select "Grant public read access to this object(s)" under the Manage public permissions section.

Now click the Next button.

![SetFilePermissions](./SetFilePermissions.png)

We don't need to worry about Storge Class, Encryption, or Metadata so click the Next button on this page.

Click the Upload button on this page to start uploading your website.

![Upload Objects](./UploadObjects.png)

Now we need to test our website to see if everything got uploaded.  Start by clicking the Properties tab.
We want to go back and explore where we set up our static website hosting.  On the Static website hosting page you'll see an Endpoint URL.  Click on this link.  If everything is setup correctly you'll see your website.

![Endpoint](./Endpoint.png)

## Connect our Domain Name to our S3 Bucket

Now that our S3 Bucket is all setup and our files are uploaded we want to connect our domain name to our bucket.  Start by going back to Route 53 and go to hosted zones.  If you don't remember how to do this review our first article on setting up your domain name.

Once you are viewing a list of your hosted zones click on your domain name.  My domain is reactless.com.

![Connect Domain](./ConnectDomain.png)

To start with we have 2 record sets configured our Name Servers 'NS' and Start of Authority 'SOA'.  We now want to add another Record Set.  

Start by clicking the Create Record Set at the top of the page.

Enter the name you want for this Record Set.  I choose 'www' for mine.

Type type should already be set as an 'A' record.

Select "Yes" for Alias.

For Alias Target you should be able to click on the text input box and see of list of selections.  At the top of the list should be the S3 bucket you created earlier.  Select that bucket.

Leave the rest of the items as default and click the Create button at the bottom of the page.

![Create Record Set](./CreateRecordSet.png)

Now your static website should be available at the domain you setup.  I set my A record to be www.reactless.com.  Typing that domain name in a new browser windows shows me that my site is now setup.  





