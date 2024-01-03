const express = require('express');
const { createCompany, getCompanyDetails } = require('../controllers/companyController');

const router = express.Router();

//create company for refNumber
router.route("/company/new").post(createCompany);

//get a single compnay
router.route("/company/:refNumber").get(getCompanyDetails);

module.exports = router;