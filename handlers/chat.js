const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({port : 3001});

wss.on("connection", ws =>{
  console.log(`연결되었습니다.`);
  console.log(wss.clients.size);

  
  ws.on("message", data =>{
    console.log(data.toString());
    for(client of wss.clients)
      client.send(data.toString());
  });

});  


module.exports = wss;