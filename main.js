const time = document.querySelector('.time')
const btnSet = document.querySelector('.btn.set')
const btnReset = document.querySelector('.btn.reset')
const btnStart = document.querySelector('.btn.start')

btnReset.addEventListener('click', resetTimer())
btnSet.addEventListener('click', setTimer())
btnStart.addEventListener('click', startTimer())

function setTimer()
{
    console.log("set Timer");
}
function resetTimer()
{
    console.log("Reset Timer");
}
function startTimer()
{
    console.log("start Timer");   
}