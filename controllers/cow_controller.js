let getCowController = (req, res) =>{
  //send all cow related data
  let db = req.app.locals.db;
  db.collection("cows").find().toArray().then(cows =>{
    res.send({cows});
  }).catch(err => {
    console.log(err);
    res.redirect('/');
  });
}

let insertCowController = (req, res) =>{
  //taking data and creating new cow
  console.log(req.body);
  let db = req.app.locals.db;
  //req.body getting data back
  db.collection("cows").insertOne(req.body).then(id => {
    res.send(req.body);
  }).catch(err => {
    console.log(err);
    res.redirect('/');
  })
}

module.exports = {
  getCowController, insertCowController
};