import md5 from 'blueimp-md5';

var instance = null;

export default class BetaSeries {

    constructor ( apiKey ) {
        this.apiKey = apiKey
    }

    static API = {
        "login": {"method": "post", "url": "https://api.betaseries.com/members/auth" },
        "favorite": {"method": "get", "url": "https://api.betaseries.com/shows/favorites" },
        "shows": {"method": "get", "url": "https://api.betaseries.com/members/infos" },
        "searchShows": {"method": "get", "url": "https://api.betaseries.com/shows/search" }
    };

    static getInstance = (key) => {
        if (instance === null) {
            instance = new BetaSeries(key);
        }
        return instance;
    }

    wrapApiKey(url) {
        return url + (url.indexOf("?") === -1 ? "?" : "&") + "key=" + this.apiKey;
    }

    fetch(url, options) {
        let p = new Promise((r, f) => {
            $.ajax({url, ...options, dataType: 'json', success: (response) => {
                r(response);
            }, error :() => {
                f();
            }});
        });
        return p;
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

    getMyShows(id) {
        return this.fetch (this.wrapApiKey(BetaSeries.API.shows.url + "?id=" + id + "&only=shows"), { 
            "method": BetaSeries.API.shows.method,
            "mode":  "no-cors"
        });        
    }

    searchShows(title) {
        let p = new Promise((r, f) => {
            this.fetch (this.wrapApiKey(BetaSeries.API.searchShows.url + "?title=" + encodeURIComponent(title) ), { 
                "method": BetaSeries.API.searchShows.method,
                "mode":  "no-cors"
            }).then((data) => {
                r(data);
            }, (e) => {
                f(e)
            })
        });

        return p;
    }

}