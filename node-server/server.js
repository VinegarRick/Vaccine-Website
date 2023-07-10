const express = require('express')
const app = express()//express application start
const cors = require('cors');//importing for setting cross origin request headers to true

console.log(__dirname) // path till directory where the file is
console.log(__filename) // complete file path with name

//creating sub application - mounting, path mount
const admin = express(); //new admin application for admin requests
const adminRouter = require("./routes/adminRoute");

const userApp = express();
const userRouter = require("./routes/userRouter");

const vaccineApp = express();
const vaccineRouter = require("./routes/vaccineRouter");

const hospitalApp = express();
const hospitalRouter = require("./routes/hospitalRouter");

//adding cors as middleware to top level of API so that cors is set to true on all endpoint
app.use(cors());

//to serve static files from the server we can use static middleware to configure our express application
app.use('/static', express.static('public'))

//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 

app.get('/user', (req, res) => {
    console.log(req.url)
    console.log(req.query)
    res.json({
        name : "Garrick"
    })
})


//to match any method name - get, put, post, delete and patch
app.all('/info', (req, res) => {
    //console.log(req)
    //res.send(JSON.stringify(req.rawHeaders))
    res.sendFile(__dirname+"/public/index.html")
})

// app.get('/public/welcome.js', (req, res) => {
//     res.sendFile(__dirname+"/public/welcome.js")
// })

// app.post('/info', (req, res) => {
//     res.sendFile(__dirname+"/index.html")
// })

app.get('/html', (req, res) => {
    res.send("<h1>Application Running Through Nodemon</h1>")
})

//application mounting
app.use('/admin',admin);
admin.use("/",adminRouter)

app.use('/user',userApp);
userApp.use("/",userRouter);

app.use('/vaccine',vaccineApp);
vaccineApp.use("/",vaccineRouter);

app.use('/hospital',hospitalApp);
hospitalApp.use("/",hospitalRouter);

app.get('/', function (req, res) {
    res.send('Hello World from Express')
})

// app.get('*', function (req, res) {
//     res.send('API you"re looking for is still in progress....')
// })

app.listen(9000)//localhost:9000

console.log("Express is listening at : localhost:9000");