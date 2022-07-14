window.NoraaBot.on('onChangedConfiguration', (event, configuration) => {
    //window.NoraaBot.websocket = createWebsocket();
});

window.NoraaBot.on('send', (event, data) => {
    console.log("Trying to send the traffic");
    url = "https://noraa.epichosting.xyz/webhook/ClickScreen";
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(data));
});