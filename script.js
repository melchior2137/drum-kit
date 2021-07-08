let myPads = document.querySelectorAll('.pads');


myPads.forEach(myPad => myPad.addEventListener('click', event => {
    const audio = document.querySelector(`audio[data-key="${event.target.dataset.key}"]`);
    audio.currentTime = 0;
    audio.play();
    myPad.classList.toggle("playing");
    //setTimeout(function(){
    //myPad.classList.remove("playing");
    //},50);
}));

window.addEventListener('keydown', event => {
    const myPad = document.querySelector(`.pads[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    myPad.classList.toggle("playing");
    //setTimeout(function(){
    //myPad.classList.remove("playing");
    //},50);
});

myPads.forEach(myPad => myPad.addEventListener('transitionend', event => {
    if(event.propertyName !== 'transform') return; //skip if not transform;
    myPad.classList.remove("playing");
}));

let selection = document.querySelectorAll(".selection");

selection.forEach(select => select.addEventListener('change', event =>{
    let audio = document.getElementById(`${event.target.name}`);
    audio.src = "drums/" + event.target.value + ".mp3";
}));

//selection.forEach(select => select.addEventListener('click', event =>{
//select.classList.add("border0");
//console.log(event);
//}));

