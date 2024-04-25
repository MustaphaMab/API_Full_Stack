const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/User');
const bcrypt = require('bcrypt');

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://mustapha:azerty1@cluster0.ktvxb.mongodb.net/moosBDD?retryWrites=true&w=majority',)
// { useNewUrlParser: true,
//    useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
   console.log("Requête est reçue !");
   next();
});


app.post('/api/auth/signup', (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
         .then(hash => {
             const user = new User({
                 email: req.body.email,
                 password: hash
             });
             user.save()
                 .then(() => res.status(201).json({ message: 'Utilisateur créé avec succès !' }))
                 .catch(error => res.status(400).json({ error }));
         })
         .catch(error => res.status(500).json({ error }));
 
 });

// app.use((req, res, next) => {
//   res.status(201);
//    next();
// });

// app.use((req, res, next) => {
//   res.json({message:'La requête a bien été reçue !'});
//    next();
// });

// app.use((req, res, next) => {
//  console.log('Réponse envoyée avec succès !');
//  });

module.exports = app;




// const express = require('express');

// const app = express();
// //mongodb+srv://<username>:<password>@cluster0.onxquvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://mustapha:azerty1@cluster0.vpq44eh.mongodb.net/mustapha?retryWrites=true&w=majority&appName=Cluster0')

// .then(() => console.log('Connexion à MongoDB réussie !'))
// .catch(() => console.log('Connexion à MongoDB échouée !'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     next();
//  });

// const User = require('./models/User');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// app.post('/api/auth/signup', (req, res, next) => {

//     bcrypt.hash(req.body.password, 10)
//          .then(hash => {
//              const user = new User({
//                  email: req.body.email,
//                  password: hash
//              });
//              user.save()
//                  .then(() => res.status(201).json({ message: 'Utilisateur créé avec succès !' }))
//                  .catch(error => res.status(400).json({ error }));
//          })
//          .catch(error => res.status(500).json({ error }));
 
//  });
// app.post('/api/auth/login', (req, res, next) => {
 
//     User.findOne({ email: req.body.email })
//          .then(user => {
//              if(!user) {
//                  return res.status(401).json({ error: "L'utilisateur n'existe pas ! "});
//              }
//              bcrypt.compare(req.body.password, user.password)
//                  .then(valid => {
//                      if(!valid) {
//                          return res.status(401).json({ error: 'Mot de passe incorrect !' });
//                      }
//                      res.status(200).json({
//                          userId: user._id,
//                          token: 'TOKEN'
//                      });
//                  })
//                  .catch(error => res.status(500).json({ error }));
//          })
//          .catch(error => res.status(500).json({ error }));
 
//  });


// app.use((req, res, next) => {
//   res.status(201);
//    next();
// });

// app.use((req, res, next) => {
//   res.json({message:'La requête a bien été reçue !'});
//    next();
// });

// app.use((req, res, next) => {
//  console.log('Réponse envoyée avec succès !');
//  });
 
// module.exports = app;