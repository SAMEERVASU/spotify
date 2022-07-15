// console.log("Welcome Back");

let songIndex=0;
let audioElement= new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');

let songs=[
   { songName:"Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill", filePath:"./songs/1.mp3",coverPath:"./covers/1.jpg"},
   { songName:"Imagine Dragons - Believer (Official Music Video)", filePath:"./songs/2.mp3",coverPath:"./covers/2.jpg"},
   { songName:"Luis Fonsi - Despacito ft. Daddy Yankee", filePath:"./songs/3.mp3",coverPath:"./covers/3.png"},
   { songName:"BTS (방탄소년단) 'Dynamite' Official MV", filePath:"./songs/4.mp3",coverPath:"./covers/4.jpg"},
   { songName:"LISA - 'LALISA' M/V", filePath:"./songs/5.mp3",coverPath:"./covers/5.jpg"},
   { songName:"Ed Sheeran - Shape of You (Official Music Video)", filePath:"./songs/6.mp3",coverPath:"./covers/6.jpg"},
   { songName:"Lehanga : Jass Manak", filePath:"./songs/7.mp3",coverPath:"./covers/7.jpg"},
   { songName:"Alan Walker - Faded", filePath:"./songs/8.mp3",coverPath:"./covers/8.jpg"},
   { songName:"Major Lazer & DJ Snake - Lean On (feat. MØ) (Official Music Video)", filePath:"./songs/9.mp3",coverPath:"./covers/9.jpg"},
   { songName:"Shakira - Waka Waka (This Time for Africa)", filePath:"./songs/10.mp3",coverPath:"./covers/10.jpg"},
   { songName:"Justin Bieber - Baby", filePath:"./songs/10.mp3",coverPath:"./covers/11.jpg"},
   { songName:"The Chainsmokers - Don't Let Me Down", filePath:"./songs/10.mp3",coverPath:"./covers/12.jpg"},
   { songName:"BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V", filePath:"./songs/10.mp3",coverPath:"./covers/13.png"},
   { songName:"Vaaste Song: Dhvani Bhanushali", filePath:"./songs/10.mp3",coverPath:"./covers/14.jpg"},
]
songItem.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName; 
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.loop=true;
        audioElement.play();
        audioElement.playbackRate = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;

 
    }
})
audioElement.addEventListener('timeupdate',()=>{
   
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
  
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
          
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        masterSongName.innerText=songs[songIndex].songName;

        audioElement.src=`./songs/${songIndex+1}.mp3`;
        audioElement.play();
        gif.style.opacity=1;

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=13){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    masterSongName.innerText=songs[songIndex].songName;

    audioElement.src=`./songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`./songs/${songIndex+1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})