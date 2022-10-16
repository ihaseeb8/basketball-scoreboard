let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")

function newGame() {
    homeCount = 0
    guestCount = 0
    document.getElementById("home-score").textContent = homeCount
    document.getElementById("guest-score").textContent = guestCount
}

function incHomeScoreBy1(){
    homeCount += 1
    document.getElementById("home-score").textContent = homeCount
}

function incHomeScoreBy2(){
    homeCount += 2
    document.getElementById("home-score").textContent = homeCount
}

function incHomeScoreBy3(){
    homeCount += 3
    document.getElementById("home-score").textContent = homeCount
}

function incGuestScoreBy1(){
    guestCount += 1
    document.getElementById("guest-score").textContent = guestCount
}

function incGuestScoreBy2(){
    guestCount += 2
    document.getElementById("guest-score").textContent = guestCount
}

function incGuestScoreBy3(){
    guestCount += 3
    document.getElementById("guest-score").textContent = guestCount
}
