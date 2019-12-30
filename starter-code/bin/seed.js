const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect("mongodb://localhost/starter-code")

const celebrity = [
    {
      name : "Tom Hanks",
      occupation: "actor",
      catchPhrase: "WILSON!!",
    },
    
    {
      name : "J.R.R Tolkien",
      occupation: "Writer",
      catchPhrase: "All we have to decide is what to do with the time that is given us",
    },

    {
      name : "Brad Pitt",
      occupation: "Actor",
      catchPhrase: "Each And Every Man Under My Command Owes Me One Hundred Nazi Scalps",

    },
    
  ];

  Celebrity.create(celebrity)
  .then(() => {
    console.log('success');
    mongoose.connection.close();
  })
  .catch(error => console.log(error))


