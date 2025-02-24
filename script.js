let songIndex = 0;
let audioElement = new Audio('song.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progress');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Raanjhana", filePath: "song1.mp3", coverPath: "cover1.jpeg"},
    {songName: "Salaam e Ishq", filePath: "song2.mp3", coverPath: "cover2.jpeg"},
    {songName: "Tumhe Jo Maine Dekha", filePath: "song3.mp3", coverPath: "cover3.jpeg"},
    {songName: "Mere Yaara", filePath: "song4.mp3", coverPath: "cover4.jpeg"},
    {songName: "Sajde", filePath: "song5.mp3", coverPath: "cover5.jpeg"},
    {songName: "Sajni", filePath: "song6.mp3", coverPath: "cover6.jpeg"},
    {songName: "Ye Tune Kya Kiya", filePath: "song7.mp3", coverPath: "cover7.jpg"},
]

// audioElement.play();

masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate' , () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration/100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});

document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 7) {
        songIndex = 1;
    }else {
        songIndex +=1;
    }
    audioElement.src = `song${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 1) {
        songIndex = 1;
    }else {
        songIndex -=1;
    }
    audioElement.src = `song${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})