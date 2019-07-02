const express = require('express');

const bodyParser = require('body-parser');

const path = require('path');

const db = require('./config/database');

const Sequelize = require('sequelize');
var cookieParser = require('cookie-parser')


db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

const app = express();
app.use(cookieParser())

app.use(bodyParser.json({ type: 'application/*+json' }))

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.locals.session = req.session;
  next();
});

app.get('/api', (req, res) => res.send('Hello from nodejs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server stated!!! ${PORT}`));




// sequelize model:generate --name Order --attributes ipAddress:string,reason:text,costAbsorder:text,orderType:text,minDate:date,maxDate:date,estimateValidTill:date,description:text,items:text,additionalInformation:text,orderedById:integer,contactPersonId:integer,paymentInformations:text,discount:text,truckVolume:float,exteriorLeft:boolean,disposalVolume:float,FounitureDismantlingInformation:text,FounitureDismantlingTime:float,flooringDisposal:float,curtainsDisposal:float,storageAreaLoadingStationId:integer,storageAreaUnloadingStationId:integer,addressLoadingId:integer,addressUnloadingId:integer