setInterval(()=>{
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    console.log(hours,":",mins,":",secs)
    document.getElementById('time').innerText = `${hours}:${mins}:${secs}`;
    if (hours>=17){
        document.getElementById("greet").innerText=`Good Morning`;
        console.log("Goodmorning")
    }
    else if (hours>=0 && hours<5){
        document.getElementById('greet').innerText=`Good Afternoon`;
        console.log("Goodafternooon");
    }
    else if(hours>=5){
        document.getElementById('greet').innerText=`Good Night`;
        console.log("Goodnight");
    }
},1000)


