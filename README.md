# movies-explorer-frontend
frontend for diploma project  

Main page is dedicated to average Yandex.Practicum student's path in web-developer profession. No, Vitaliy is not my alterego and not a mistake, it's just a layout provided by Yandex platform.
It uses two APIs: API by Beat Film Festival and my own backend. You can register a new user, change profile information, save fims (like) and delete them (dislike). For the 1st time you need to search movies. During your search you can use "Short movies only" checkbox.   
Your saved movies are in "saved movies" page. You can use search there too.    
You can login by e-mail and password, your logged in status will be saved for 7 days in cookies, so you don't need to sign in within these days. Also you can logout, so new login is needed.   

### To start:    
Clone repo to your local machine. Then install dependencies by
```javascript
npm run start
``` 
to start it in production mode or 
```javascript
npm run dev
``` 
to start it in developer's mode.   
When you start it locally you need to replace base url for main api. Go to scr/utils/MainApi.js and change base url to "http://localhost:3000". Then repeat it in scr/utils/Auth.js. For your comfort there are commented lines for fast copy.   
Automatically it will run on http://localhost:3000/ so if you started my API there, choose another port (3001 for example).   

To use with my backend go to [https://github.com/nemenova/movies-explorer-api] and use instructions in README.md there.  

To produce static files run 
```javascript
npm run build
``` 
after that you can deploy frontend by scp command.

Technologies:
* React (hooks) 
* Context   
* Form Validation
* HOC - Protected Route
* React Browser Router
* React DOM
* Adaptive design

Deployed to 
## [here](https://frontend.nemenova.nomoredomains.monster "VM is located at Yandex.Cloud")  
