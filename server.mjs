'use strict';

import express from "express"
import bodyParser from "body-parser"
import pkg from "chai";
const {expect} = pkg;
import cors from "cors"
import apiRouter from './routes/api.mjs';
// require('dotenv').config();

// const apiRoutes         = require('./routes/api.js');
import fccTestingRoutes  from './routes/fcctesting.js';
import runner from './test-runner.js';

let app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/api', apiRouter);

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });

//For FCC testing purposes
fccTestingRoutes(app);
    
//404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

const port = process.env.PORT || 3000;

//Start our server and tests!
app.listen(port, function () {
  console.log("Listening on port " + port);
  if(process.env.NODE_ENV==='test') {
    console.log('Running Tests...');
    setTimeout(function () {
      try {
        runner.run();
      } catch(e) {
          console.log('Tests are not valid:');
          console.error(e);
      }
    }, 1500);
  }
});

export default app; //for testing
