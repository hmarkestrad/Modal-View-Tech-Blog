<h1 align="center">Model View Tech Blog Estrada</h1>

<p align="center">
<img src="https://img.shields.io/github/repo-size/hmarkestrad/Modal-View-Tech-Blog"/>
<img src="https://img.shields.io/github/languages/top/hmarkestrad/Modal-View-Tech-Blog"/>
<img src="https://img.shields.io/github/issues/hmarkestrad/Modal-View-Tech-Blog"/>
<img src="https://img.shields.io/github/last-commit/Modal-View-Tech-Blog"/>
</p>
  
## Table of Contents
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Contributions](#contributions)
- [License](#license)
- [Installation](#installation)
- [Questions](#questions)
  
## Description
This build is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. The build this site completely from scratch and is deployed to Heroku.  
  
## Usage
When the server is running, you can access the application at `http://localhost:5000/`.  
    
## Screenshot:  
![Team-Profile-Generator](/public/Screenshot.png)  
  
## Contributions
H. Mark Estrada
  
## License
![badge](https://img.shields.io/badge/license-MIT-brightgreen)<br>
This application is covered by the MIT license. 
  
## Technologies
![badge](https://img.shields.io/badge/Javascript-blue)
![badge](https://img.shields.io/badge/jQuery-blue)
![badge](https://img.shields.io/badge/-node.js-blue)
![badge](https://img.shields.io/badge/-inquirer-blue)
![badge](https://img.shields.io/badge/-json-blue)
![badge](https://img.shields.io/badge/-html5-blue)
![badge](https://img.shields.io/badge/-css-blue)
  
## Installation
1. Create a `.env` file in the root directory. Add the following text:<br>
DB_NAME='techblog_db'  
DB_USER=''  
DB_PW=''  
SESSION_SECRET=''  
2. Use MYSWQL Workbench to CREATE DATABASE 'techblog_db'.
3. Run `npm Install`<br>  
4. Login to `MySQL Shell` (mysql -u root -p);
5. Run `SOURCE db/schema.sql`.
6. Run `npm run seed` to seed the database.
7. Run `npm start` to start the server.
  
## Questions
This Tech Blog App has been deployed on Heroku: https://model-view-tech-blog-estrada.herokuapp.com<br>
GitHub: [hmarkestrad](https://github.com/hmarkestrad)<br>
Contact me with any questions: h.mark.estrada@gmail.com<br>
Copyright 2022 © H. Mark Estrada. All Rights Reserved.<br>
