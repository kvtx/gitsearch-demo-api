const fetch = require("node-fetch");


const Retriever = async (query) => {
    let url =  `https://api.github.com/search/repositories?q=${query}`;
    return fetch(url, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
        })
        .then(res => res.json())
        .then(response => {
            return response;
        })
        .catch(error => Promise.reject( error));
}

module.exports = Retriever;