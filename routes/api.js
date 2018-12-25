const express = require('express');
const router = express.Router();
const Airtable = require('../controllers/AirtableController');

router.post('/create/:base(\\w+)/:tablename(\\w+)', Airtable.verifyBase, Airtable.create);
router.put('/update/:base(\\w+)/:tablename(\\w+)', Airtable.verifyBase, Airtable.update);
router.delete('/delete/:base(\\w+)/:tablename(\\w+)', Airtable.verifyBase, Airtable.delete);
module.exports = router;
