const express = require('express');
var router = express.Router();
const app = express();
const port = process.env.PORT || 5000;
const API_KEY = "8a3BSnS90pYiSZP2lEVYNUFo5fdcf818"
const axios = require("axios");
const { response } = require('express');
let newArray = [];
var mySet = new Set(newArray);
newArray = [...mySet];

/* GET users listing. */
app.get('/', (req, res) => {
  axios.get('https://muse.ai/api/files/collections?metadata=full', {
      headers: {
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
module.exports = router;
