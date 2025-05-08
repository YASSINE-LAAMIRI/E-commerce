//require

const express = require ("express");
require ("dotenv").config();
//chemain de la de DB
const connectDB = require('./config/connectDB')
// instances
const app = express();

//middelware
app.use(express.json( ))
// appel de la fonction connectDB
connectDB()
//Route pour l'authentification
app.use("/api/auth",require("./routes/auth.route"))
//route pour la manipulation des users 
app.use("/api/user",require("./routes/user.route"))
//Port
const PORT = process.env.PORT 
//listen
app.listen(PORT,(err)=>{  
      err
        ?console.log(err)
        :console.log(`le serveur est a l'ecoute sur le port ${PORT}`)
}
);

