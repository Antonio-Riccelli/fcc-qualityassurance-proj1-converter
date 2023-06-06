'use strict';
import express from 'express';
const router = express.Router();

import pkg from "chai";
const {expect} = pkg;
import convertHandler from '../controllers/convertHandler.mjs';

// /api/convert.

router.get('/convert', (req, res) => {
const {input} = req.query;
const initNum = convertHandler.getNum(input);
const initUnit = convertHandler.getUnit(input);
// const response = convertHandler
res.send("hey")
})

export default router;

// class ApiController {
//   constructor() {
//     this.router = express.Router();
//     this.router.get('/convert', this.convertHandler);
//   }
// }

// module.exports = ApiController;
