# Here are instructions on how to easily setup a new website dev environment on a brand new computer 

**This will be different depending on whether you are:**
 1. Starting on a brand new website on a computer that has never developed with this method before
 1. Creating a new website on a computer that already has the development environment on it

**The features of this dev environment setup are:**
 1. Wordpress
 1. Workflow Automation
 1. Private Server with Vagrant & Virtual Box
 1. Github Integration
 

# Setting up a brand new computer (option 1) #
**Install Programs Links**
 1. Virtual Box: (https://www.virtualbox.org/)
 1. Vagrant: (https://www.vagrantup.com/)
 1. Git Bash: (https://git-scm.com/downloads) - only use if Windows
	+ While this doesn't have Git Bash visible, you are installing Git Bash through this link
 1. Node & NPM: (https://nodejs.org/en/)
 1. Gulp: (http://gulpjs.com/)

# Instructions #
**Throughout this installation, anywhere you see** *template-website* **replace that with the name of your website**

## Setting up the Dev Environment ##

1. Go to www.github.com/reddev22/web-dev-environment
	+ Download the zip file and extract it in an easy to access directory in your computer
		- I would recommend creating a directory named "local-sites" and saving it to your desktop
		- Change this file name from *template-website* to whatever name your site will be. You will use this multiple times throughout the rest of this process
1. Install VirtualBox and Vagrant on your computer 
	+ If using windows, install Git Bash on your computer
1. Open your command line (Windows use Git Bash) and navigate to the folder 'local-sites'
	+ You can do this by typing 'cd ' and then dragging the folder into the commandline and hitting enter
1. Run the command 'vagrant up'
	+ This will take a few minutes so feel free to take a break if you want
1. Once complete, navigate into the *template-website* folder in the command line
	+ Now type **npm install**. This will install all of the necessary packages that you need in this directory.
1. Once it completes you'll need to edit your computer's *hosts* file to point *template-website.test* to our virtual machine. 
	+ On Windows your host file lives in C/Windows/System32/Drivers/etc
		- If using Windows, make sure to run Notepad as System Administrator or else you won't be able to see the file. 
	+ On Mac your hosts file lives in /etc. 
1. Once there, add this line to the bottom of your hosts file: "192.168.56.101 template-website.test"

1. There is a series of edits we now have to make before your website will appear in browser
	1. Navigate to your local-sites folder and open the *puphpet* directory then open the *config.yaml* file
	1. Scroll down to ~line 231 where you see vhosts
		- First change the 4 instances of *template-website* to your sites name.
	1. Go into the *template-website* folder and open the file *settings.js*
		- Change *template-website* in *exports.themeLocation* to the name of your theme
		- Change *template-website.test* in *exports.urlToPreview* to the name of what you put in the hosts file in Notepad.

1. Now you can visit *template-website.test* in any browser. The root of this project is `/template-website/app`

1. To test the automated workflow, navigate to your *template-website* directory in the command line.
	+ Run the command **gulp watch**
		- A new window should appear in your default browser
		- Go into your theme (for me the filepath looks like *template-website\app\wp-content\themes\template-website*)
		- Open either the *index.php* or anything in the *sass* folder in your text editor, make a change, and save it.
			_ Your browser should update with the new information! Congrats you have automated workflow for sass/html!
			_ I don't have this working for javascript yet. It should work for any added .php files.
	 + If you run into any issues, first exit out of the command using *Ctrl-C* and restarting the script with **gulp-watch**
	 	- If that doesn't work, try to solve it through the error log in the commandline.

## Configuring Git Hub ##

Now that we have the dev environment set up and working, we need to connect to our own repository since you shouldn't be editing this one.

1. Create a new repository in github.
	+ You will not want to initialize the repository with a *README.md* file
1. Clone this respository to your *local-sites* directory
	+ It should just be an empty directory at this point
1. Move all the files from *web-dev-environment-master* to your new empty repository file
	+ Navigate to the repository in your commandline
	+ Run **git add -A**
	+ Run **git commit**
	+ Run **git push -u origin master**
		- If this is your first time, you may need to enter your github login details
1. Once you have done that, you should be good to go! Congratulations you setup your own automated wordpress development environment with Github. This will help you with starting new projects and automating many of your tasks. Happy Coding!
	

## Tidying things up
While the website is now running, there are somethings left that we need to do for security reasons. 

1. Open up the *wp-config* file in your app folder.
1. Scroll down until after the database section. You should see many lines of code that begin with **define**
1. Open up this link (https://api.wordpress.org/secret-key/1.1/salt/) and highlight the entire page and copy it
1. Highlight the whole block from **AUTH_KEY** to **NONCE_SALT** and paste in your clipboard
1. Ideally this would be on a private repository rather than a public one, but I don't have it setup with bitbucket quite yet.

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
