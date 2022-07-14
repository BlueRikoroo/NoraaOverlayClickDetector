# NoraaOverlayClickDetector
This is a twitch extention which you can find here
https://dashboard.twitch.tv/extensions/qillvtd91t2sywoxafyag186blg8jy-0.0.1

I encourage people to update the repo as they see fit.

# Description
This extention sends webhook data to an external self-hosted website. To do this, your website needs to be "Allowlist for URL Fetching Domains", which I need to add myself. Please email Aaron1997ps@gmail.com with your domain so it can be added to the list

# Example Webhook
```json
{
    "event": "click", // Name of the event. May be 'click', 'mousedown', 'mouseup', 'mousemove' or 'mousedrag',
    "data": {
        "user": {
            "id": "582408410", // Twitch User ID of the viewer if granted permission. Null otherwise
            "opaqueId": "U582408410", // An unique user ID given by twitch for anonymous viewers
            "role": "broadcaster",
            "isLinked": true, // If the 'id' field corresponds to an actual Twitch viewer ID
            "subscriptionStatus": null // State of subscription of the viewer
        },
        "context": {
            "language": "en",
            "theme": "dark", // It may be 'light'
            "isVideoAdShowing": false,
            "arePlayerControlsVisible": false,
            "game": "Animals, Aquariums, and Zoos",
            "bitrate": 6000224,
            "bufferSize": 1.383139,
            "displayResolution": "842x473",
            "hlsLatencyBroadcaster": 1.637999,
            "isFullScreen": false,
            "isPaused": false,
            "isTheatreMode": false,
            "isMuted": true,
            "playerChannel": "foofurbot", // your channel ;)
            "videoResolution": "1280x720",
            "volume": 0.5,
            "playbackMode": "video",
            "mode": "viewer"
        },
        "data": {
            "width": 841, // current size of the viewport
            "height": 473,
            "x": 249, // current point of triggered event
            "y": 315,
            "percentX": 0.29607609988109396, // relative position to the current screen of the triggered event
            "percentY": 0.6659619450317125,
            "button": 0 // '0' for left click, '1' for right click. It may capture another buttons as well
        }
    }
}
```

# To-Do
* Re-Do the config file as it's currently just a copy paste of the Foofurbot Extention. Completely re-design it for this project and include the following features
  * Spot to put in your webhook url
  * Ability to change recording speed (step)
  * Change Cursor
* Make the sending of the webhook a bit more effectient if possible.
* Remove unecessary code from the transfer of websocket code to webhook code.

# Fork Credit
This project was a fork of AdelaFoofur82's FoofurBot-CaptureClickOverlay which you can find here:
https://github.com/AdelaFoofur82/FoofurBot-CaptureClickOverlay
