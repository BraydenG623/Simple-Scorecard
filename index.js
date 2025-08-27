let score1Ele = document.getElementById("score1");
let score2Ele = document.getElementById("score2");


function reset() {
    score1Ele.textContent ="00"
    score2Ele.textContent = "00"
}

function inc1S1(){
    let castScore = Number(score1Ele.textContent)
    console.log(castScore)
    castScore += 1
    score1Ele.textContent = castScore
}

function inc2S1(){
    let castScore = Number(score1Ele.textContent)
    console.log(castScore)
    castScore += 2
    score1Ele.textContent = castScore
}

function inc3S1(){
    let castScore = Number(score1Ele.textContent)
    console.log(castScore)
    castScore += 3
    score1Ele.textContent = castScore
}

function inc1S2(){
    let castScore = Number(score2Ele.textContent)
    console.log(castScore)
    castScore += 1
    score2Ele.textContent = castScore
}

function inc2S2(){
    let castScore = Number(score2Ele.textContent)
    console.log(castScore)
    castScore += 2
    score2Ele.textContent = castScore
}

function inc3S2(){
    let castScore = Number(score2Ele.textContent)
    console.log(castScore)
    castScore += 3
    score2Ele.textContent = castScore
}