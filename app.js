//Service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("service_worker.js")
            .then(registration => {
                console.log("SW Registered");
            }).catch(error => {
                console.log("SW Registration failed");
            })
    })
} else {
    console.log("Not Supported");
}

const hrsHand = document.querySelector(".hrs__hand")
const minHand = document.querySelector(".min__hand")
const secHand = document.querySelector(".sec__hand")


const handRotate = (el, rotation) => {
    el.style.setProperty("--rotate", rotation * 360)
}

const handsMove = () => {
    let time = new Date()

    const sec = time.getSeconds() / 60
    const min = (sec + time.getMinutes()) / 60
    const hrs = (min + time.getHours()) / 12

    handRotate(hrsHand, hrs)
    handRotate(minHand, min)
    handRotate(secHand, sec)
}

setInterval(handsMove, 1000)


//Audio Notification
// const notify = () => {
// const audioContent = new Audio("./Lesson-Ended-2.wav")

// Add an event listener to play the audiowhen it's loaded

// const audioContent = new Audio("./audio/Lesson-Ended.mp3")

// audioContent.addEventListener("canplaythrough", function () {
//     audioContent.play()
// })

// audioContent.load()

// document.addEventListener("DOMContentLoaded", function () {
//     const audioContent = new Audio("./audio/Lesson-Ended.mp3")
//     audioContent.play()
// })

// let time = new Date()
// const mins = time.getMinutes()
// console.log(mins);
// if (mins === 16) {
//     const audioContent = new Audio("./audio/Lesson-Ended.mp3")
//     audioContent.play()
// }

// }

// notify()

// setInterval(notify, 5000)



// myAudio.addEventListener("DOMContentLoaded", function () {
//     const audioContent = new Audio("./audio/Lesson-Ended.mp3")
//     audioContent.play()
//     console.log("myAudio");
// })

// window.addEventListener("DOMContentLoaded", () => {
//     const myAudio = document.querySelector("#my-audio")
//     myAudio.play()
// })

// const playSound = () => {
//     const audio = new Audio("./audio/Lesson-Ended-2.wav")
//     audio.play()
// }


// const setInterFunc = setInterval(playSound, 3000)

// setTimeout(setInterFunc, 6000)

const audioFunc = () => {
    // const currentTime = new Date()
    // currentHrs = currentTime.getHours()
    // currentMin = currentTime.getMinutes()
    // if(currentHrs === 8){
    //     const audioFile = new Audio("./audio/Lesson-Ended.mp3")
    //     audioFile.play()
    // }
    const audioFile = new Audio("/audio/Lesson Ended.mp3")
    // console.log(currentMin)
    audioFile.play()
}

setInterval(audioFunc, 5000)