var express = require('express');
var router = express.Router();
//router to handle find query
router.post('/find', function(req, res) {
    console.log(req.body);
    res.send(req.body);
    //will call method to get data from github based on data sent
});
  
module.exports = router;