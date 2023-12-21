## Name
Web-2 Course Project - Meet Your Greek


## What is my project about?
My project is about greek mythology. On this website you can look up information about deities and myths from the greek mythology.\
Additionally, the inspirations page will show things that exists today, that are inspired from the greek mythology. Next to that,\
a timeline of the greek mythology is included, which shows the different ages and events of the greek mythology.\
Lastly, a user-system has been integrated in order to be able to send suggestions about new deities, myths or inspirations.\

## Structure
docs-css:\
 This folder contains all the stylesheets for the different pages of the website.\
 \
docs-images:\
 This folder contains all the images used on the website. The images has been distributed in different folders depending on what page they are for.\
 \
docs:\
 In here we can find all the HTML pages and their according Javascript files. All the Javascript files have been rewritten using the webpack module.\
 \
src:\
 This folder contains all the original Javascript files.\
 \
webpack.config.js\
 This file is made to rewrite the original Javascript files with webpack.


## Used command
"$npm init -y"\
"$npm install webpack webpack-cli"\
"$npx webpack"


## How to host
To host this project you need to host the docs folder. It contains everything you need to let the website work correctly. \
If the code is changed, don't forget to run "$npx webpack" in order to rewrite the Javascript files.


## How to test
Normally, everything that needs to be tested works on the website.\
There is a possibility to create an account on the website itself. \
Once registered, you should be able to login into the website.

