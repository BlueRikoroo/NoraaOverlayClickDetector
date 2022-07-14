window.NoraaBot.on('onChangedConfiguration', (event, configuration) => {
    const data =  window.NoraaBot.configuration.fields;
    $("#websocket").val(data.websocket);
    $("#mousemoveTimeStep").val(data.mousemoveTimeStep);
});

function fillForm(data) {
    for (var i in data) {
        if (data[i].value == "on")
            $(`[name="${data[i].name}"]`).prop("checked", true);
        else {
            $(`[name="${data[i].name}"]`).val(data[i].value);
        }
    }
}

$(function () {
    $("#config").on("submit", async (event) => {
        debugger;
        event.preventDefault();
        window.NoraaBot.configuration.fields =  {
            websocket: $("#websocket").val(),
            mousemoveTimeStep: $("#mousemoveTimeStep").val()
        };
        window.Twitch.ext.configuration.set("broadcaster", "1", JSON.stringify(window.NoraaBot.configuration));
        $("#sent-toast").modal("show");
    });

    $("#sent-toast").modal();

    hljs.highlightAll();
});