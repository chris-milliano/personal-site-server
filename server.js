/******************** DECLARE LIBS AND VARS ********************/
// Add Libs
const express = require('express');
const cors = require('cors');
const app = express();
const api = express.Router();

const path = require('path');
const bodyParser = require('body-parser');

if(process.env.NODE_ENV != "production") {
	require('dotenv').config();
}


// Configure app to use body parser for POST
 app.use(cors());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());


 /******************** SETUP API ROUTES ********************/

 // Handle base route
 api.get('/', function(req, res) {
     res.json( { message: 'Welcome to our API, please visit iamchris.digital' });
 });


 // // Return a pet's info
 // api.get('/pet/:id', function(req, res) {
 //     res.sendFile( path.join(__dirname + '/pet.json') );
 // });


 // api.post('/visited-marker', function(req, res) {
 // 	console.log("POST at /visited-marker");
 // });


 /******************** START SERVER ********************/

 // Move all 'router' routes under '/api'
 app.use('/api', api);


 // Statically serve the dist folder
 app.use(express.static(path.join(__dirname, 'dist')));


 // This route needs to be last
 // This will serve the site and pass the path to the Angular app
 app.get('*', function(req, res) {
 	res.sendFile(path.join(__dirname , 'dist', 'index.html'));
 });


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Chris Milliano Site server is running on port: ${port}`);
});
