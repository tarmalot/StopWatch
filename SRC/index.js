let startTime
let seconds = 0
let running = false

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds % 3600) / 60)
    let second = seconds % 60
    return [
        String(hours).padStart(2, "0"), 
        String(minutes).padStart(2, "0"), 
        String(second).padStart(2, "0")
    ]
}

document.getElementById("start").addEventListener("click" , () => {
    if(!running) {
        running = true
        document.getElementById("start").innerHTML = "pause"
        if(document.getElementById("time").innerHTML === "00:00:00") {
            startTime = Math.floor(Date.now() / 1000) 
        }
    } else if(running) {
        running = false
        document.getElementById("start").innerHTML = "start"
    }
})

document.getElementById("reset").addEventListener("click", () => {
    startTime = Math.floor(Date.now() / 1000) 
    document.getElementById("time").innerHTML = "00:00:00"
})

setInterval(() => {
    if(running) {
        let time = Math.floor(Date.now() / 1000)
        let dif = time - startTime
        let formated = formatTime(dif)
        document.getElementById("time").innerHTML = `${formated[0]}:${formated[1]}:${formated[2]}`
    }
}, 1000)
