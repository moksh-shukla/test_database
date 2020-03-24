## Batch website -Deployment Steps
### Step 1
Set up the google form to collect information. For that purpose,

* you  may make a copy of the given form 
https://docs.google.com/forms/d/1gBGcbN9qrCTsLBmFCsnHDn32b2C1huPCf9Ybdr9KpkQ/edit?usp=sharing

* link the form to the spreadsheet. 
* In the spreadsheet, go to File->Publish to the Web and copy paste the link. 

## Step 2
Clone the repo and install the dependencies

<pre>
git clone -b master --single-branch https://github.com/sid17/iitky12.git batchWebsite

cd batchWebsite

bower install
</pre>

## Step 3

Change the configuration settings in  batchWebsite/settings.json

* spreadsheetLink : Link obtained from step1
* formLink: link to the google form
* defaultSortEntriesBy : default field on which entries are sorted (eg: Name)
* orderDescending: order in which entires are sorted (true/false)
* searchInKeys: list of fields on which search is allowed
* paginateNumEntries: number of entries on a single page

The rest of the fields  are self explanatory

## Note:
The app does not include a backend and contains just static content. The google spreadsheets serves as the database. In case you wish to host it on github, make a branch named gh-pages in your repo and push the code to it. The website can then be accessed at username.github.io/repo-name