//importing the express module. 
const express = require('express');
//importing dotenv and configuring the evnironment variables
require('dotenv').config();

//declare the app 
const app = express();

let people = ['geddy', 'neil', 'alex'];

//GET middleware:root entry point --> surfing from localhost:3001/
app.get('/',(req,res) => {
    return res.send("Hello from the server - updated");
})


//GET middleware:users entry point --> list all the users --> surfing from localhost:3001/users
app.get('/users', (req, res)=> {
    return res.send(people);
})

//GET middleware using a request parameter :name --> surfing from localhost:3001/users/Test
app.get('/users/:name', (req, res) => {
    return res.json({result:req.params.name})
})

//Get middleware: using request parameter to check if the user exists --> localhost:3001/users/find/neil
app.get('/users/find/:name',(req, res)=> {
    //print the params object what does it contain: 
    console.log("params: ", req.params)
    if(people.includes(req.params.name)){
        return res.json("User found");
    } 
    else {
        return res.json("User not found")
    }
})

//listen for requests on the designated port number. 
app.listen(process.env.PORT || 3002, () => {
    console.log("the server is running");
})

