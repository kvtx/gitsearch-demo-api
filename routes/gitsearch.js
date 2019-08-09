var express = require('express');
var router = express.Router();
var Cache = require('../methods/cache');
var cache = new Cache();
//router to handle find query
router.post('/find',  async (req, res) => {
    try{
        let query = req.body.data;
        if(query.length > 0){
            let result = await cache.run(query);
            res.send(JSON.stringify({'data':result}));
        }else{
            res.send(JSON.stringify({'error':'No data in query'}));
        }
    }catch(e){
        console.log(e);
        res.send(JSON.stringify({'error':e}));
    }
    //will call method to get data from github based on data sent
});
  
module.exports = router;