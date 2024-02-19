var music = document.querySelector('.music-source')
var timeline = document.querySelector('.timeline')
var list = ''
fetch('data/playlist.json')
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        list = data
        updatePlaylist(list)
    })
    .catch(error => console.error('Error loading the playlist:', error))

function updatePlaylist(songs) {
    let playlistElement = document.querySelector('.playlist-item-box')
    playlistElement.innerHTML = ''

    songs.forEach(song => {
        let item = document.createElement('div')
        item.classList.add('playlist-item')
        item.classList.add('todo-card')
        let img = document.createElement('div')
        img.classList.add('playlist-img')
        img.style.backgroundImage = `url('${song.img}')`

        let title = document.createElement('div')
        title.classList.add('playlist-title')
        title.textContent = song.title

        item.addEventListener('click', function() {
            updateMusicDetails(song)
            let playBtn = document.querySelector('.play')
            if (playBtn.children[0].classList.contains('imgPause')) {
                music.play()
            }
        });

        item.appendChild(img);
        item.appendChild(title);
        playlistElement.appendChild(item)
    });
}

function updateMusicDetails(song) {
    document.getElementById('MUSIC-SOURCE').src = song.songSrc
    document.getElementById('MUSIC-SOURCE').dataset.id = song.id
    document.getElementById('COVER').src = song.img
    document.getElementById('TITLE').textContent = song.title
    document.getElementById('SINGER').textContent = song.author
    music.currentTime = 0;
    music.load()
}

function playNextSong() {
    let songId = parseInt(music.dataset.id)
    let newSongId = (songId + 1) % list.length
    let newSong = list[newSongId]
    updateMusicDetails(newSong)
    let playBtn = document.querySelector('.play')
    if (playBtn.children[0].classList.contains('imgPause')) {
        music.play()
    }
}

function playPreviousSong() {
    let songId = parseInt(music.dataset.id)
    let newSongId = (songId - 1 + list.length) % list.length
    let newSong = list[newSongId]
    updateMusicDetails(newSong)
    let playBtn = document.querySelector('.play')
    if (playBtn.children[0].classList.contains('imgPause')) {
        music.play()
    }
}

function togglePlay() {
    let playBtn = document.querySelector('.play')
    if (music.paused) {
        music.play()
        playBtn.innerHTML = '<img src="../../static/player/Svgs/pause.svg" class="imgPause">'
    } else {
        music.pause()
        playBtn.innerHTML = '<img src="../../static/player/Svgs/play.svg" class="imgPlay">'
    }
}

function updateVolume(direction) {
    let volumeRange = document.querySelector('.volume-range')
    let newVolume = volumeRange.value / 100 + direction
    volumeRange.value = Math.min(Math.max(newVolume * 100, 0), 100)
    music.volume = newVolume
}

function updateTimeline() {
    music.currentTime = timeline.value;
}

function updateTimeDisplay() {
    let currentTimeDisplay = document.querySelector('.current-time')
    let durationDisplay = document.querySelector('.duration')
    let cs = parseInt(music.currentTime % 60)
    let cm = parseInt((music.currentTime / 60) % 60)
    let ds = parseInt(music.duration % 60)
    let dm = parseInt((music.duration / 60) % 60)
    currentTimeDisplay.textContent = `${cm}:${cs < 10 ? '0' : ''}${cs}`
    durationDisplay.textContent = `${dm}:${ds < 10 ? '0' : ''}${ds}`
}

function initPlayer() {
    let playBtn = document.querySelector('.play');
    let volumeDownBtn = document.querySelector('.volume-down')
    let volumeUpBtn = document.querySelector('.volume-up')
    let nextBtn = document.querySelector('.next')
    let previousBtn = document.querySelector('.previous')

    playBtn.addEventListener('click', togglePlay)
    volumeDownBtn.addEventListener('click', () => updateVolume(-0.2))
    volumeUpBtn.addEventListener('click', () => updateVolume(0.2))
    nextBtn.addEventListener('click', playNextSong)
    previousBtn.addEventListener('click', playPreviousSong)

    music.addEventListener('ended', playNextSong)
    music.addEventListener('timeupdate', updateTimeDisplay)
    timeline.addEventListener('input', updateTimeline)
    let volumeRange = document.querySelector('.volume-range');
    music.volume = volumeRange.value / 100;

    music.addEventListener('loadeddata', () => {
        timeline.max = music.duration
        updateTimeDisplay()
    })
}

function main() {
    initPlayer()
}

document.addEventListener('DOMContentLoaded', main)
