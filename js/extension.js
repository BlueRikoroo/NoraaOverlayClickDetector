window.NoraaBot = {};
window.NoraaBot.configuration = {};

window.Twitch.ext.configuration.onChanged(() => {
    if (window.Twitch.ext.configuration.broadcaster) {
        window.NoraaBot.configuration = JSON.parse(window.Twitch.ext.configuration.broadcaster.content);
        window.NoraaBot.trigger('onChangedConfiguration', window.NoraaBot.configuration);
    }
});

window.Twitch.ext.onAuthorized((auth) => {
    window.NoraaBot.channelId = auth.channelId;

    const _v = window.Twitch.ext.viewer;
    window.NoraaBot.viewer = {
        id: _v.id,
        opaqueId: _v.opaqueId,
        role: _v.role,
        isLinked: _v.isLinked,
        subscriptionStatus: _v.subscriptionStatus
    };

    window.NoraaBot.trigger('onAuthorized', auth);
});

window.Twitch.ext.onContext((ctx) => {
    if (window.NoraaBot.context) {
        if (window.NoraaBot.context.isFullScreen != ctx.isFullScreen)
            window.NoraaBot.trigger("fullscreenChanged");
        if (window.NoraaBot.context.isMuted != ctx.isMuted)
            window.NoraaBot.trigger("mutedChanged");
        if (window.NoraaBot.context.isPaused != ctx.isPaused)
            window.NoraaBot.trigger("pausedChanged");
        if (window.NoraaBot.context.isTheatreMode != ctx.isTheatreMode)
            window.NoraaBot.trigger("theatreModeChanged");
        if (window.NoraaBot.context.isVideoAdShowing != ctx.isVideoAdShowing)
            window.NoraaBot.trigger("videoAdShowingChanged");
    }

    window.NoraaBot.context = ctx;
    window.NoraaBot.trigger('onContext', ctx);
});

window.NoraaBot._events = $("<div>");

window.NoraaBot.on = function (eventType, handler) {
    window.NoraaBot._events.on(eventType, handler);
};

window.NoraaBot.off = function (eventType, handler) {
    window.NoraaBot._events.off(eventType, handler);
};

window.NoraaBot.one = function (eventType, handler) {
    window.NoraaBot._events.one(eventType, handler);
};

window.NoraaBot.trigger = function (eventType, extraParameters) {
    window.NoraaBot._events.trigger(eventType, extraParameters);
};

window.NoraaBot.send = function (event, data) {
    window.NoraaBot.trigger('send', { event, data: { user: window.NoraaBot.viewer, context: window.NoraaBot.context, data } });
};

window.NoraaBot.isMe = function (userData) {
    return userData.opaqueId == window.NoraaBot.viewer.opaqueId;
}

$(() => {

});