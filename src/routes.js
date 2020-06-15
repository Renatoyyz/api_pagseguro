import { Router } from 'express';
import Config from './app/models/Config'
import axios from 'axios';
import url from 'locutus/php/url/http_build_query';

const routes = new Router();

routes.get('/teste', (req, res) => {

    let ret = url(Config.getAuthentication());
    let response = null;

    axios.post(Config.getUrlSessions() + '?' + ret, {
        verify: false
    })
        .then((resp) => {
            //console.log(`statusCode: ${res.statusCode}`)
            console.log(resp.data)
            response = resp;
        })
    
    return res.json({ok: true, nome: "Renato"});
});

export default routes;