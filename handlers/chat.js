const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({port : 3001});

wss.on("connection", ws =>{
  console.log(`연결되었습니다.`);
  console.log(wss.clients.size);
 
  ws.on("message", data =>{
    ws.room = JSON.parse(data).room;
    for(client of wss.clients){
      if(ws.room === client.room)
        client.send(data.toString());
    }
  });
});  

module.exports = wss;