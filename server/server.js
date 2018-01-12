const mongoose = require('mongoose');
const crypto = require('crypto');
const http = require('http');

const db = mongoose.createConnection('mongodb://localhost/notesapp');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log('Database connected!');
});

function hash(text) {
  return crypto.createHash('sha1').update(text).digest('base64');
}

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = db.model('User', UserSchema);

UserSchema.methods.createUser = function (userData) {
  const user = {
    username: userData.login,
    password: hash(userData.password),
    email: userData.email,
  };
  return new User(user).save();
};

//  var newUser = UserSchema.methods.createUser({ login: "Cmok", password: "zzzzzz", email: "chornycmok@gmail.com"});

const s = http.createServer(function(request, response) {
  let alldata = '';
  const httpMethod = request.method.toUpperCase();
  const requestURI = request.url;
  console.log(`Incoming request\nMethod: ${httpMethod}\nURI: ${requestURI}`);

  request.on('data', (data) => {
    alldata += data;
  });

  request.on('end', (data) => {    
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.writeHead(200);

    if (httpMethod === 'POST') {
      const formInfo = JSON.parse(alldata);
      const answer = {};

      if (formInfo.form === 'loginform') {
        User.findOne({ username: formInfo.login }, 'username password email', function (err, user) {
          answer.prom = -1;
          let answerString = '';
          if (!err) {
            if (user === null) {
              answer.prom = 1;
            } else if (user.password !== hash(formInfo.password)) {
              answer.prom = 2;
            } else {
              answer.prom = 0;
              answer.username = user.username;
              answer.email = user.email;
            }
            answerString = JSON.stringify(answer);
          }
          response.write(answerString);
          response.end();
        });
      }
    } else {
      const notes = [];
      for (let i = 1; i < 6; i++) {
        notes.push({ header: 'Заметка '+i, body: 'Тело заметки '+i});
      }
      let str = JSON.stringify(notes);
      response.write(str);
      response.end();  
    }
  });
});

console.log('Server listen on port 8079');
s.listen(8079);