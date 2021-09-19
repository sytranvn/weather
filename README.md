# Weather app
[**Live demo**](https://sytranvn.as.r.appspot.com/)
This is full bundle of weather server and client app.
This project include https://github.com/sytranvn/weather-app as front end. Please check out README in that repo for more details.

## Setup
### Backend
- Clone the repository  
```
git clone git@github.com:sytranvn/weather.git
# or git clone https://github.com/sytranvn/weather.git
```
- Install dependencies  
 In `weather` directory run 
 ```
 yarn
 ```

### Front end
- Clone front end repository  
    ```
    git submodule update --init --recursive
    ```
    ```
    cd client
    yarn
    yarn build
    ```
### Start
- Start server
    In `weather` directory run  
    ```
    yarn start
    ```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Structure
``` 
.
 |-bin
 | |-www
 |-server
 | |-routes
 |-client -> git@github:sytranvn/weather-app.git
 | |-public
 | |-build
 | |-src
 |-app.js
 
```
