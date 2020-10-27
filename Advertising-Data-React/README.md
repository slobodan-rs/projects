# Advertising Data ETL-V

Marketing Analytics app that shows ETL of:

    -Facebook Ads
    -Google Adwords
    -Google Analytics
    -Mailchimp

![AD img](https://github.com/slobodan-rs/projects/blob/master/Advertising-Data/ad.png?raw=true)

## Technologies

    - React: 16.13.1
    - Styled-components: ^5.2.0
    - Axios: ^0.20.0
    - Json-server
    - Lodash: ^4.17.20
    - React-Chartjs-2: ^2.10.0
    - Chart.js : ^2.9.3
    - Json-server

## Dependencies

    - React
    - Styled-components
    - Axios
    - Json-server
    - Lodash
    - React-Chartjs-2
    - Chart.js
    - Json-server

## Installation

- Download NodeJS to install NPM, use the folowing instructions: [https://www.npmjs.com/get-npm](https://www.npmjs.com/get-npm)

- #### `npm-install`

  - Alternatively you can use `npm install -g npm-install-missing` & `npm-install-missing`

## Startup

- ### `json-server --watch db.json --port 3005`

  - Runs the localhost server <br />

- ### `npm start`

  - Runs the app in the development mode.<br />
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    The page will reload if you make edits.<br />
    You will also see any lint errors in the console.

## Approach

> - Initially I started by creating services component and used Axios to get data from localhost server<br>
> - Pass the data to useEffect hook to set a state for it<br>
> - Created Form component and from there filtered labels and data needed for selected label<br>
> - Created Chart component add pass the necessary props to from Form to it, set up chart data<br>
> - In the end, created Header component, basically I left easy part for the end.<br>
