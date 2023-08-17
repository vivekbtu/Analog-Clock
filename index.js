const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");


// Create spikes
for (let i = 0; i < 60; i++) {
    let minSpikeEl = document.createElement("i");
    let secSpikeEl = document.createElement("i");

    minSpikeEl.className = "spike"
    secSpikeEl.className = "spike"

    minSpikeEl.style = `--rotate:${6 * i}deg`;
    secSpikeEl.style = `--rotate:${6 * i}deg`;

    minSpikeEl.setAttribute("data-i", i);
    secSpikeEl.setAttribute("data-i", i);

    seconds.append(secSpikeEl);
    minutes.append(minSpikeEl);
}

function getTime() {

    let date = new Date();

    // For Seconds Condition
    let sec = date.getSeconds();

    if (sec == 0) 
    {
        seconds.classList.add("stop-anim")
    } 

    else 
    {
        seconds.classList.remove("stop-anim")
    }

    // For Minutes Condition
    let min = date.getMinutes();

    if (min == 0) 
    {
        minutes.classList.add("stop-anim")
    } 
    else 
    {
        minutes.classList.remove("stop-anim")
    }


    hour.textContent = date.getHours();
    minute.textContent = min;

    minutes.style = `--dRotate:${6 * min}deg`;

    seconds.style = `--dRotate:${6 * sec}deg`;
}

setInterval(getTime, 1000);
getTime();

