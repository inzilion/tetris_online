const express = require('express');
const session = require('express-session');
const sessionConfig = require('./config/session');
const nunjucks = require('nunjucks');
const authRouter = require('./routes/authRouter');
const gameRouter = require('./routes/gameRouter');
const app = express();

nunjucks.configure('views', {
  autoescape: true,
  express: app,
})

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>{res.render('index.html');});
app.use('/auth', authRouter);


app.listen(3000);