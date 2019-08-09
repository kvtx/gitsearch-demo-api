var Retriever = require('./retriever');
//handle caching
class Cache {
    constructor(){
        this.cache = {};
        this.ttl = 600000;//cache data for ten minutes
    }
    //remove from cache after ttl
    handleRemove(query) {
        setTimeout(()=>{
            if(this.isCached(query) !== false){
                delete this.cache[query];
            }
        }, this.ttl);
    }
    //check if query is cached
    isCached(query) {
        if(query in this.cache){
            return this.cache[query];
        }else{
            return false
        }
    }
    //cache query
    store (query, data) {
        this.cache[query] = data;
        this.handleRemove(query);
    }
    //retrieve from cache by query
    get(query){
        return this.cache[query];
    }
    //handle checking cache, getting data from github if not cached and storing, else returning cached data
    run (query) {
        let isCached = this.isCached(query);
        return new Promise(async (resolve) => {
            if(isCached === false){ 
                console.log("cached", query);
                let result = await Retriever(query);
                this.store(query, result);
                resolve(result);
            }else{
                console.log("retrieved from cache:", query);
                resolve(isCached);
            }
        });
    }
}

module.exports = Cache;