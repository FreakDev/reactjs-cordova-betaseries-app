import md5 from 'blueimp-md5';

var instance = null;

export default class BetaSeries {

    constructor ( apiKey ) {
        this.apiKey = apiKey
    }

    static API = {
        "login": {"method": "post", "url": "https://api.betaseries.com/members/auth" }        
    };

    static getInstance = (key) => {
        if (instance === null) {
            instance = new BetaSeries(key);
        }
        return instance;
    }

    wrapApiKey(url) {
        return url + "?key=" + this.apiKey;
    }

    login (login, password) {
        var fd = new FormData();
        fd.append("login", login);
        fd.append("password", md5(password));

        return fetch (this.wrapApiKey(BetaSeries.API.login.url), { 
            "method": BetaSeries.API.login.method,
            "body": fd
        });
    }

}