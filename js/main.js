

const videoPlayer=document.getElementById("video-player")
const video=document.getElementById("video")
const controls=document.querySelector(".controls")
const progress=document.querySelector(".progress")
const progressfilled=document.querySelector(".progress__filled")
const toggleBtn=document.getElementById("toggleButton")
const nextBtn=document.getElementById("next")
const prevBtn=document.getElementById("prev")


function playVideo() {
    videoPlayer.classList.add('play')
    toggleBtn.querySelector('i').classList.remove('fa-play')
    toggleBtn.querySelector('i').classList.add('fa-pause')

    video.play()
}

function pauseVideo() {
    videoPlayer.classList.remove('play')
    toggleBtn.querySelector('i').classList.add('fa-play')
    toggleBtn.querySelector('i').classList.remove('fa-pause')

    video.pause()
}


toggleBtn.addEventListener('click', () => {

    let isPlaying = videoPlayer.classList.contains('play')

    isPlaying ? pauseVideo() : playVideo()

})



video.addEventListener('timeupdate', updateProgressfilled)

    function updateProgressfilled(e) {
        const {duration, currentTime} = e.srcElement
        const progressfilledPercent = (currentTime / duration) * 100
        progressfilled.style.width = `${progressfilledPercent}%`
        progressfilled.style.flexBasis=`auto`
    }

    progress.addEventListener('click', setProgressfilled)

    function setProgressfilled(e) {
        const width = this.clientWidth
        const clickX = e.offsetX
        const duration = video.duration

        video.currentTime = (clickX / width) * duration
    } 


    nextBtn.addEventListener("click", ()=>{
       
        video.currentTime+=10
    })

    prevBtn.addEventListener("click", ()=>{
        video.currentTime-=10
        
    })