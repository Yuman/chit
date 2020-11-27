//  https://livecodestream.dev/post/2020-08-11-a-practical-guide-to-jwt-authentication-with-nodejs/

// https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs

// $eO0BOx%OR3HhVV$  https://www.freemysqlhosting.net/

// https://webdeasy.de/en/complete-login-system-with-node-js-vue-js-restapi-jwt-part-1-2/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mailer = require('./lib/mailer.js')
// set up port
const PORT = 3000;
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const router = require('./routes/router.js');
app.use('/api', router);

app.get('/leave-email', (req, res) =>{
  let email = req.query.e
  let linkObj = {em: email};
  let query = Buffer.from(JSON.stringify(linkObj)).toString('hex');
  let link = req.protocol + '//' + req.hostname + '/api/sign-up?q=' + query
  console.log('Built link: ' +link)
  mailer(email, link)
  res.json({msg: "Check your email at " + email})
}
)

// run server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));