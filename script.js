
let clock = document.querySelector('.clock');
let messageText = document.querySelector('.message');
let dateText = document.querySelector('.date')

function pad(num){
    return num < 10 ? '0' + num : num
}


function amOrPm(hours){
    return hours < 12 ? 'AM' : 'PM'
}

function message(hours) {
    if (hours >= 5 && hours < 12) {
        return "Good Morning";
    } else if (hours >= 12 && hours < 17) {
        return "Good Afternoon";
    } else if (hours >= 17 && hours < 21) {
        return "Good Evening";
    } else {
        return "Good Night";
    }
}

setInterval(()=>{
    let date = new Date()
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    messageText.innerHTML = message(hours);
    clock.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${amOrPm(hours)}`;
    dateText.innerHTML = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
}, 1000)

////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// let clock = document.querySelector('.clock');
// let messageText = document.querySelector('.message');
// let dateText = document.querySelector('.date');

// function pad(num) {
//     return num < 10 ? '0' + num : num;
// }

// function getAMPM(hours) {
//     return hours >= 12 ? 'PM' : 'AM';
// }

// function getMessage(hours) {
//     if (hours >= 5 && hours < 12) {
//         return "Good Morning";
//     } else if (hours >= 12 && hours < 17) {
//         return "Good Afternoon";
//     } else if (hours >= 17 && hours < 21) {
//         return "Good Evening";
//     } else {
//         return "Good Night";
//     }
// }

// function updateClock() {
//     let date = new Date();
//     let hours = date.getHours();

//     messageText.innerHTML = getMessage(hours);

//     clock.innerHTML = `
//         ${pad(hours)}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${getAMPM(hours)}
//     `;

//     dateText.innerHTML = `
//         ${date.getFullYear()}/${pad(date.getMonth() + 1)}/${pad(date.getDate())}
//     `;
// }

// setInterval(updateClock, 1000);
// updateClock();