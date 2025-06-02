const express = require('express')
const app = express()
const path = require('path');
const Usermodel = require('./models/User');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'Public')));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index');
});
app.get('/read', async (req, res) => {
  let users = await Usermodel.find();
  res.render("read" , {users});
});

app.get('/delete/:id', async (req, res) => {
   let users = await Usermodel.findOneAndDelete({_id:req.params.id});
    res.redirect("/read");
  
});
app.get('/edit/:userid', async (req, res) => {
    let users = await Usermodel.findOne({_id:req.params.userid});
    res.render("edit", {users});
});
app.post('/update/:userid', async (req, res) => {
    let {name, email, image} = req.body;
    let users = await Usermodel.findOneAndUpdate({_id:req.params.userid},{image, name, email},{new:true});
    res.redirect("/read");

});

app.post('/create',async (req, res) => {
    let {name, email, image} = req.body;
    let CreatedUser = await Usermodel.create({
        name,
        email,
        image
    });
    res.redirect("/read");
});



app.listen(3000, () => {
    console.log('Server listening on port 3000');
});



























// // app.use(function(req,res,next){
// //    console.log("middle layer chala")
// //    next();
// // });
// // app.use(function(req,res,next){
// //     console.log("ek baar or middle layer chala")
// //     next();
// // });
// app.get('/', function (req, res,) {
//    res.render("index")
//   })

//   app.get('/profile/:username/:age/:number', function (req, res) {
//     res.send (`welcome , ${req.params.username} of age ${req.params.age} is number ${req.params.number} `);
    
//   })
//   app.get('/message', function (req, res, next) {
//     return next(new error ("something went wrong i dont know"))
//   })

//   app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke i dont know!')
//   })

// app.listen(3000)

