# Weather app
This is full bundle of weather server and client app.
This project include https://github.com/sytranvn/weather-app as front end. Please check out README in that repo for more details.

## Setup
- Clone the repository  
```
git clone git@github.com:sytranvn/weather.git
# or git clone https://github.com/sytranvn/weather.git
```
- Clone front end repository  
```
git submodule update --init --recursive
```
- Install dependencies  
 In `weather` directory run 
 ```
 yarn
 cd client
 yarn
 yarn build
 ```
- Start server
 In `weather` directory run  
 ```
 yarn start
 ```

## Structure
```
. 
.
 |-bin
 | |-www
 |-server
 | |-routes
 |-client
 | |-public
 | |-build
 | |-src
 |-app.js
 
```
