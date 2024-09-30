


const musicContainer = document.getElementById('audio-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');


const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['Jhoome Jo Pathaan (Pathaan)_192(PagalWorldl)', 'Bom Diggy Diggy  (VIDEO)  Zack Knight  Jasmin Walia  Sonu Ke Titu Ki Sweety', 'Brown Munde_320(PagalWorldl)', 'JAWAN_ Chaleya (Hindi)  Shah Rukh Khan  Nayanthara  Atlee  Anirudh  Arijit S, Shilpa R  Kumaar', 'Desi Kalakaar-(PagalWorld)', 'Pyaar Hota Kayi Baar Hai (Full video) Tu Jhoothi Main Makkaar Ranbir,Shraddha,Pritam,Arijit,Amitabh', 'LEO - Ordinary Person Lyric  Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi', 'Muqabla - Street Dancer 3D_192(PagalWorldl)', 'Heeriye X Chaleya X Tu Aake Dekhle Mashup  revibe  Viral Insta Reels, TikTok Remix', 'Check It Out_320(PagalWorldl)', 'Sarkar_320(PagalWorldl)', 'Not Ramaiya Vastavaiya(PagalWorldl)', 'Brown Rang (honey singh) DJ ROHAN', '_Systumm(PagalWorld.com.pe)', 'We Rollin(PagalWorld.com.pe)', '2 Gulaab_192(PagalWorld)', 'Cheques(PagalWorld.com.pe)', 'Blue Eyes(PagalWorld.com.pe)', 'Tu-Cheez-Lajawab(PagalWorld)', 'Chhore Haryane Aale_192(PaglaSongs)', 'Baby Calm Down(PagalWorldl)', 'Friends(PagalWorld)', 'Honey Singh Dope Shope (DJ Shadow)', 'Tenu Kaadi Tension(PagalWorld.com.pe)'];



let songIndex = 0;


loadSong(songs[songIndex]);


function loadSong(song) {
    title.innerText = song;
    audio.src = `./music/${song}.mp3`;
    cover.src = `./pics/${song}.jpg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}


function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}


function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}


function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}


function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}


function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});


prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


audio.addEventListener('timeupdate', updateProgress);


progressContainer.addEventListener('click', setProgress);


audio.addEventListener('ended', nextSong);


function playthis(a) {
    let songIndex = a;
    loadSong(songs[songIndex])
    playSong();

}



function shownav() {
    var x = document.getElementById("navbar");
    if (x.className == "navbar") {
        x.className += " responsive";

    } else {
        x.className = "navbar";

    }

}
