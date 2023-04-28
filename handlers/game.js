const wss = require('./chat');

const index = (req, res) => {
  res.render("game/multi/index.html", {user : req.session.user});
  console.dir(wss.clients);
}


module.exports = {
  index,
}