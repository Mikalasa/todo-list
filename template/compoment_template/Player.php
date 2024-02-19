<div class="Info-Part Part">
    <div class="user-card">
        <div class="cover">
            <img id="COVER" src="../../static/player/Album Covers/0.jpg" alt="Album Cover">
        </div>
        <div class="info">
            <div id="TITLE" class="title">问花</div>
            <div id="SINGER" class="singer">周深</div>
        </div>
    </div>

</div>
<div class="Control-Part Part">
    <div class="rang-bar-box">
        <span class="current-time">0:00</span>
        <input type="range" step="1" class="timeline" value="0" min="0" max="100" oninput="handleTimeLine()">
        <audio id="MUSIC-SOURCE" data-id="0" class="music-source">
            <source src="../../static/player/Album/问花-周深.mp3" type="audio/mp3" >
        </audio>
        <span class="duration">0:00</span>
    </div>
    <div class="play-control-box">
        <div class="music-box">
            <div class="previous">
                <img src="../../static/player/Svgs/previous.svg" class="material-icons">
            </div>
            <div class="play">
                <img src="../../static/player/Svgs/play.svg" class="imgPlay">
            </div>
            <div class="next">
                <img src="../../static/player/Svgs/next.svg" class="material-icons">
            </div>
        </div>
        <div class="volume-box">
            <img class="volume-up material-icons" src="../../static/player/Svgs/volume-up.svg">
            <div class="volume-range-box">
                <input type="range" class="volume-range" step="1" value="30" min="0" max="100" oninput="music.volume = this.value/100">
            </div>
            <img class="volume-down material-icons" src="../../static/player/Svgs/volume-down.svg">
        </div>
    </div>
</div>

<div id="PLAYLIST" class="playlist Part">
    <div class="playlist-item-box">

    </div>
</div>