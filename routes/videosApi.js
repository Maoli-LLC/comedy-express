const express = require('express');
const serverless = require('serverless-http')
const API_KEY = "8a3BSnS90pYiSZP2lEVYNUFo5fdcf818"
const axios = require("axios");
const app = express();
var cors = require('cors')
const router = express.Router();
router.use(cors());

router.get('/', (req, res) => {
    axios.get('https://muse.ai/api/files/collections?metadata=full', {
        headers: {
            'Key': '8a3BSnS90pYiSZP2lEVYNUFo5fdcf818',
            'Access-Control-Allow-Orig in': "*"
        },
    }).then(resp => {
        res.send(resp.data);
        
        res.end();
    }).catch(err => {
        res.send(err);
    })
    
})

app.use('/.netlify/functions/videosApi', router)

module.exports.handler = serverless(app);