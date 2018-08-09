# Here are instructions on how to easily setup a new website dev environment on a brand new computer 

**This will be different depending on whether you are:**
 1. Starting on a brand new website on a computer that has never developed with this method before
 2. Creating a new website on a computer that already has the development environment on it

**The features of this dev environment setup are:**
 1. Wordpress
 2. Workflow Automation
 3. Private Server with Vagrant & Virtual Box
 4. Github Integration
 

# Setting up a brand new computer (option 1) #
**Install Programs Links**
 1. Virtual Box: (https://www.virtualbox.org/)
 2. Vagrant: (https://www.vagrantup.com/)
 3. Git Bash: (https://git-scm.com/downloads) - only use if Windows\
	+ While this doesn't have Git Bash visible, you are installing Git Bash through this link
 4. Node & NPM: (https://nodejs.org/en/)
 5. Gulp: (http://gulpjs.com/)

# Instructions #
# Throughout this installation, anywhere you see **template-website** replace that with the name of your website

1. Go to www.github.com/reddev22/web-dev-environment
	+ Download the zip file and extract it in an easy to access directory in your computer
		- I would recommend creating a directory named "local-sites" and saving it to your desktop
		- Change this file name from *template-website* to whatever name your site will be. You will use this multiple times throughout the rest of this process
2. Install VirtualBox and Vagrant on your computer 
	+ If using windows, install Git Bash on your computer
3. Open your command line (Windows use Git Bash) and navigate to the folder 'local-sites'
	+ You can do this by typing 'cd ' and then dragging the folder into the commandline and hitting enter
4. Run the command 'vagrant up'
	+ This will take a few minutes so feel free to take a break if you want
5. Once complete, navigate into the *template-website* folder in the command line
	+ Now type **npm install**. This will install all of the necessary packages that you need in this directory.
6. Once it completes you'll need to edit your computer's *hosts* file to point *template-website.test* to our virtual machine. 
	+ On Windows your host file lives in C/Windows/System32/Drivers/etc
		- If using Windows, make sure to run Notepad as System Administrator or else you won't be able to see the file. 
	+ On Mac your hosts file lives in /etc. 
7. Once there, add this line to the bottom of your hosts file: "192.168.56.101 template-website.test"

8. There is a series of edits we now have to make before your website will appear in browser
	1. Navigate to your local-sites folder and open the *puphpet* directory then open the *config.yaml* file
	1. Scroll down to ~line 231 where you see vhosts
		- First change the 4 instances of *template-website* to your sites name.
	1. Go into the *template-website* folder and open the file *settings.js*
		- Change *template-theme* to the name of your theme
		- Change *template-website.test* to the name of what you put in the hosts file in Notepad

8. Now you can visit *template-website.test* in any browser. The root of this project is `/template-website/app`

## Tidying things up
While the website is now running, there are somethings left that we need to do for security reasons. 

1. Open up the *wp-config* file in your app folder.
2. Scroll down until after the database section. You should see many lines of code that begin with **define**
3. Open up this link (https://api.wordpress.org/secret-key/1.1/salt/) and highlight the entire page and copy it
4. Highlight the whole block from **AUTH_KEY** to **NONCE_SALT** and paste in your clipboard
5. Ideally this would be on a private repository rather than a public one, but I don't have it setup with bitbucket quite yet.

## Database Info
An initial database is automatically created for you. You do not need to enter this information when going through the wordpress setup. 

Database name: **template_website**

Database user: **dbuser**

User Password: **123**

Database hostname: **localhost**

## Managing Databases
This box does not include PhpMyAdmin. Instead I recommend using Seqeul Pro (on Mac) and HeidiSQL (on Windows). Here are the settings you can use to connect.

MySQL Host: **127.0.0.1**

Username: **dbuser**

Password: **123**

SSH Host: **192.168.56.101**

SSH User: **vagrant**

SSH Key: **point towards the file that lives in our project folder under puphpet/files/dot/ssh/id_rsa**
