// ===============================    result function
let p_score = 0;
let c_score = 0;
document.getElementById('nwp').innerText = `${p_score}`;
document.getElementById('nwc').innerText = `${c_score}`;

const result = () => {

    // ===if all are same
    if (a == b && left == right) {
        document.getElementById('result').innerText = 'Match Drawn'
    }
    // ===rock and paper
    else if ((a == 'fas' && left == 'fa-fist-raised') && (b == 'fas' && right == 'fa-hand-paper')) {
        document.getElementById('result').innerText = "computer wins this player looses"
        c_score += 1
        document.getElementById('nwc').innerText = `${c_score}`;
    }
    else if ((b == 'fas' && right == 'fa-fist-raised') && (a == 'fas' && left == 'fa-hand-paper')) {
        document.getElementById('result').innerText = "player wins this computer looses"
        p_score += 1
        document.getElementById('nwp').innerText = `${p_score}`;
    }
    // === rock and scissor
    else if ((a == 'fas' && left == 'fa-fist-raised') && (b == 'far' && right == 'fa-hand-peace')) {
        document.getElementById('result').innerText = "player wins this computer looses";
        p_score += 1
        document.getElementById('nwp').innerText = `${p_score}`;
    }
    else if ((b == 'fas' && right == 'fa-fist-raised') && (a == 'far' && left == 'fa-hand-peace')) {
        document.getElementById('result').innerText = "computer wins this player looses"
        c_score += 1
        document.getElementById('nwc').innerText = `${c_score}`;
    }
    // === paper and scissor
    else if ((a == 'fas' && left == 'fa-hand-paper') && (b == 'far' && right == 'fa-hand-peace')) {
        document.getElementById('result').innerText = "computer wins this player looses"
        c_score += 1
        document.getElementById('nwc').innerText = `${c_score}`;
    }
    else if ((b == 'fas' && right == 'fa-hand-paper') && (a == 'far' && left == 'fa-hand-peace')) {
        document.getElementById('result').innerText = "player wins this computer looses"
        p_score += 1
        document.getElementById('nwp').innerText = `${p_score}`;
    }

}





// =====================   

// const timefn = ()=>{
//     let n = 0;
//     set
//     ()=>{
//         if(n<10){
//             console.log(n);
//             n+=1
//         }
//         else{

//         }
//     }
// }



















let a = 'far';
let b = 'far';
let left = 'fa-hand-point-right';
let right = "fa-hand-point-left";


document.getElementById("letsplay").addEventListener('click', game = () => {
    document.getElementById('newdiv').style.display = "block";
    document.getElementById("letsplay").style.display = "none";
    // document.getElementById("letsplay").classList.add('fadeOut');

    document.getElementById('fonts').innerHTML = `<i class="${a} ${left}" id="left"></i> 
                                                <i class="${b} ${right}" id="right"></i> `;


    // ------------------------ for rock
    document.getElementById("rock").addEventListener('click', fn = () => {
        let rn = Math.floor(Math.random() * 3);
        console.log(rn);
        let obj1 = {
            i: { bb: 'fas', right1: 'fa-fist-raised' },
            j: { bb: 'fas', right1: 'fa-hand-paper' },
            k: { bb: 'far', right1: 'fa-hand-peace' }
        }
        if (rn == 0) {
            b = obj1.i.bb
            right = obj1.i.right1
        }
        else if (rn == 1) {
            b = obj1.j.bb
            right = obj1.j.right1
        }
        else {
            b = obj1.k.bb
            right = obj1.k.right1
        }

        a = 'fas';
        left = 'fa-fist-raised';
        document.getElementById('fonts').innerHTML = `<i class="${a} ${left}" id="left"></i> 
        <i class="${b} ${right}" id="right"></i> `;
        result();
        setTimeout(() => {
            a = 'far';
            b = 'far';
            left = 'fa-hand-point-right';
            right = "fa-hand-point-left";
            document.getElementById('fonts').innerHTML = `<i class="${a} ${left}" id="left"></i> 
            <i class="${b} ${right}" id="right"></i> `;
            document.getElementById('result').innerText = "Play Again"
            document.getElementById('result').style.color = "yellow"
        }, 1000)
    })


    // ------------------------ for paper
    document.getElementById("paper").addEventListener('click', fn = () => {

        let rn2 = Math.floor(Math.random() * 3);
        let obj2 = {
            i: { bb: 'fas', right1: 'fa-fist-raised' },
            j: { bb: 'fas', right1: 'fa-hand-paper' },
            k: { bb: 'far', right1: 'fa-hand-peace' }
        }
        if (rn2 == 0) {
            b = obj2.i.bb
            right = obj2.i.right1
        }
        else if (rn2 == 2) {
            b = obj2.j.bb
            right = obj2.j.right1
        }
        else {
            b = obj2.k.bb
            right = obj2.k.right1
        }

        a = 'fas';
        left = 'fa-hand-paper';
        document.getElementById('fonts').innerHTML = `<i class="${a} ${left}" id="left"></i> 
                                                <i class="${b} ${right}" id="right"></i> `;
        result();

        setTimeout(() => {
            a = 'far';
            b = 'far';
            left = 'fa-hand-point-right';
            right = "fa-hand-point-left";
            document.getElementById('fonts').innerHTML = `<i class="${a} ${left}" id="left"></i> 
            <i class="${b} ${right}" id="right"></i> `;
            document.getElementById('result').innerText = "Play Again"
            document.getElementById('result').style.color = "yellow"
        }, 1000)

    })


    // ------------------------ for scissor
    document.getElementById("scissor").addEventListener('click', fn = () => {

        let rn3 = Math.floor(Math.random() * 3);
        let obj3 = {
            i: { bb: 'fas', right1: 'fa-fist-raised' },
            j: { bb: 'fas', right1: 'fa-hand-paper' },
            k: { bb: 'far', right1: 'fa-hand-peace' }
        }
        if (rn3 == 0) {
            b = obj3.i.bb
            right = obj3.i.right1
        }
        else if (rn3 == 2) {
            b = obj3.j.bb
            right = obj3.j.right1
        }
        else {
            b = obj3.k.bb
            right = obj3.k.right1
        }

        a = 'far';
        left = 'fa-hand-peace';
        document.getElementById('fonts').innerHTML = `<i class="${a} ${left}" id="left"></i> 
                                                    <i class="${b} ${right}" id="right"></i> `;
        result();

        setTimeout(() => {
            a = 'far';
            b = 'far';
            left = 'fa-hand-point-right';
            right = "fa-hand-point-left";
            document.getElementById('fonts').innerHTML = `<i class="${a} ${left}" id="left"></i> 
            <i class="${b} ${right}" id="right"></i> `;
            document.getElementById('result').innerText = "Play Again"
            document.getElementById('result').style.color = "yellow"
        }, 1000)
    })

    document.getElementById('playagain').addEventListener('click', () => {

        p_score = 0;
        c_score = 0;
        document.getElementById('nwc').innerText = `${c_score}`;
        document.getElementById('nwp').innerText = `${p_score}`;
        // fn();
        document.getElementById('newdiv').style.display = "none";
        document.getElementById("letsplay").style.display = "block";
        document.getElementById("letsplay").style.marginLeft = "590px";
        let a = 'far';
        let b = 'far';
        let left = 'fa-hand-point-right';
        let right = "fa-hand-point-left";
        document.getElementById('letsplay').addEventListener('click', () => {
            document.getElementById('fonts').innerHTML = `<i class="${a} ${left}" id="left"></i> 
            <i class="${a} ${right}" id="right"></i> `;


        })



    })
})




























