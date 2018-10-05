"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var YTVideo = /** @class */ (function () {
    function YTVideo() {
    }
    YTVideo.prototype.run = function () {
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        onYouTubeIframeAPIReady(player);
    };
    return YTVideo;
}());
exports.YTVideo = YTVideo;
// 2. This code loads the IFrame Player API code asynchronously.
function onYouTubeIframeAPIReady(player) {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': function () { alert(1); },
            'onStateChange': function () { alert(1); }
        }
    });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}
// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
//# sourceMappingURL=playlist.js.map