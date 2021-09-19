// document.getElementById("keyboard")
let key = false
document.getElementById("textarea").addEventListener('click',()=>{
    if(key == false){
        document.getElementById("keyboard").style.display = "block"
        // key = true
    }
})

document.getElementById("tick").addEventListener('click',()=>{
    console.log("clicked tick")
    document.getElementById("keyboard").style.display = 'none';
})


// =========================================================> Writing on screen function
let screen_text = "";
const myFunction = (e) => {
    let textarea = document.getElementById('textarea');
    screen_text += e.target.innerText
    textarea.innerText = screen_text

}

let w = document.getElementsByClassName("w")
for (var i = 0; i < w.length; i++) {
    w[i].addEventListener("click", myFunction, false)
}

// ========================================================> Backspace function
document.getElementById('backspace').addEventListener("click", ()=>{
    screen_text=screen_text.slice(0,-1)
    textarea.innerText = screen_text
    console.log(screen_text)
})






// ===========================================================>   upper case and lower case function
let alphabets = document.getElementsByClassName("alphabets");
empty_string = "";
u_case = false;

document.getElementById("capslock").addEventListener("click", () => {
    if (u_case == false) {
        u_case = true
        console.log("clickde")
        for (var i = 0; i < alphabets.length; i++) {
            empty_string += alphabets[i].innerText
        }
        console.log(empty_string)
        empty_string = empty_string.toUpperCase();
        console.log("upper cased ", empty_string)

        for (i = 0; i < alphabets.length; i++) {
            alphabets[i].innerText = empty_string[i]
        }

    }
    else {

        u_case = false
        console.log("clickde")
        for (var i = 0; i < alphabets.length; i++) {
            empty_string += alphabets[i].innerText
        }
        console.log(empty_string)
        empty_string = empty_string.toLowerCase();
        console.log("upper cased ", empty_string)

        for (i = 0; i < alphabets.length; i++) {
            alphabets[i].innerText = empty_string[i]
        }
    }

})


// ==================================================================>  Enter key function
document.getElementById("enter").addEventListener("click",()=>{
    textarea.innerText = '<br>';
})



