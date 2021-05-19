
// importing 

const express = require ('express');
const db = require('mongoose');
const Message= require('./dbMessages.js');



//app config


const app = express();
const port = process.env.PORT || 5000;


//middleware



app.get("/", (req,res)=> res.status(200).send('hello world'));

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);

        }

    });
});




// middleware


// DB config

const connection_url= "mongodb+srv://admin:WaAOFBI2CppQaDk0@cluster0.gcegy.mongodb.net/whatsappdb?retryWrites=true&w=majority";



db.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// ??????

// api routes





//WaAOFBI2CppQaDk0



// listen

app.listen(port,()=>console.log(`Listening on localhost:${port}`))

