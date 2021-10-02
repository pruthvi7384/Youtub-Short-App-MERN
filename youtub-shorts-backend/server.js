import express from 'express';
import mongoose  from 'mongoose';
import videos from './videosModules.js';
import cors from 'cors';

// App Config

const app = express();

// Port

const port = process.env.PORT || 8000;

// Middlewhare

app.use(express.json());
app.use(cors());

// Db Config

const connection_URL = 'Your MongoDb Database Conection URL';
mongoose.connect(connection_URL, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// Database Connected Or Not
mongoose.connection.once('open',()=>{
    console.log('DB CONNECTED');
});

// API End Points

app.get('/',(req, res) => {
    res.status(200).send('I have Created Youtub Shorts APP');
});

app.post('/youtubshorts/video', (req, res) => {
    const dbvideos = req.body;
    videos.create(dbvideos,(err, data) => {
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.get('/retrieve/conversation',(req, res)=>{
    videos.find((err, messages)=>{
        if (err) {
            res.status(500).send(err);
        }else{
            res.status(200).send(messages);
        }
    })
})
// Listner

app.listen(port, ()=>{
    console.log(`server is running in http://localhost:${port}`);
});
