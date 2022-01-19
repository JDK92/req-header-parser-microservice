const { Router } = require('express');

const { 
  getIndex, 
  getHeaders
} = require('../controllers/controllers');

const router = Router();

router.get("/", getIndex);

router.get("/api/whoami", getHeaders);


module.exports = router;