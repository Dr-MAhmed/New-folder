// Chapter 08 Practice Set...

// Problem No-1
// Write a program to show different alerts when different buttons are clicked.
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
btn1.addEventListener('click', ()=>{
    alert("You have clicked the first button.");
});
btn2.addEventListener('click', ()=>{
    alert("You have clicked the second button.");
});
btn3.addEventListener('click', ()=>{
    alert("You have clicked the third button.");
});

// Problem No-2
// Create a website which is capable of storing bookmarks of your favourite websites using href.
{/* <a href="https://www.google.com" target="_blank"><button id="google">google</button></a>
<a href="https://www.facebook.com" target="_blank"><button id="facebook">facebook</button></a>
<a href="https://www.twitter.com" target="_blank"><button id="twitter">twitter</button></a>
<a href="https://www.youtube.com" target="_blank"><button id="youtube">youtube</button></a>
<a href="https://www.instagram.com" target="_blank"><button id="instagram">instagram</button></a> */}



// Problem No-3
// Repeat Q-02 using eventListener.
let google = document.getElementById('google');
let facebook = document.getElementById('facebook');
let twitter = document.getElementById('twitter');
let youtube = document.getElementById('youtube');
let instagram = document.getElementById('instagram');

google.addEventListener('click', ()=>{
    window.location = "https://www.google.com";
});
facebook.addEventListener('click', ()=>{
    window.location = "https://www.facebook.com";
});
twitter.addEventListener('click', ()=>{
    window.location = "https://www.twitter.com";
});
youtube.addEventListener('click', ()=>{
    window.location = "https://www.youtube.com";
});
instagram.addEventListener('click', ()=>{
    window.location = "https://www.instagram.com";
});



// Problem No-4
// Write a JS program to keep fetching content of a website(every 5 sec).
const fetchContent = async (url)=>{
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
setInterval(async function(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1';
    console.log(fetchContent(url));
}, 5000)


// Problem No-5
// Create a glowing bulb effect using classList toggle method in JS.

const glowOverlay = document.querySelector('.glow-overlay');
        let isGlowing = false;

        setInterval(function() {
            isGlowing = !isGlowing;
            if (isGlowing) {
                glowOverlay.style.animation = 'glowAnimation 1.5s infinite alternate';
                glowOverlay.style.backgroundColor = "rgba(255, 255, 0, 0.5)"
            } else {
                glowOverlay.style.animation = 'none';
                glowOverlay.style.backgroundColor = "";
            }
        }, 1000);