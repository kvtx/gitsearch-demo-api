var express = require('express');
var Retriever = require('../methods/retriever');
var router = express.Router();
//router to handle find query
router.post('/find',  async (req, res) => {
    try{
        let query = req.body.data;
        if(query.length > 0){
            let result = await Retriever(query);
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