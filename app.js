const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors')
const API_KEY = "8a3BSnS90pYiSZP2lEVYNUFo5fdcf818"
const axios = require("axios");
const { response } = require('express');
let newArray = [];
var mySet = new Set(newArray);
newArray = [...mySet];
let scidArray =[]
const allowedOrigins = ['http://localhost:3000',
  'https://gifted-newton-d5f936.netlify.app/'];

      

app.use(cors(allowedOrigins))

app.get('/', (req, res) => {
        axios.get('https://muse.ai/api/files/collections?metadata=full', {
            headers: {
            'Access-Control-Allow-Orig in' :'*'  , 
            'Key': '8a3BSnS90pYiSZP2lEVYNUFo5fdcf818'

            },
        }).then(resp => {
            res.send(resp.data);
        
        }).catch(err => {
            res.send(err);
         })
    })

app.listen(port, () => {
    console.log(`listening on port ${port}`)

})
