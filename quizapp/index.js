// import'questionsapi.js'
let questions = [
    {
        "q": "what is box model",
        'o1': "this is a box of css",
        'o2': "this is a grid of css",
        'o3': "this is a slex property of css",
        'o4': "border padding and margin of css",
        'correct': '2'
    },
    {
        "q": "what is display flex",
        'o1': "to make a container a box",
        'o2': "this is a grid of css",
        'o3': "to make boxes flexible",
        'o4': "border padding and margin of css",
        'correct': '3'
    },
    {
        "q": "what is display grid",
        'o1': "to make grid",
        'o2': "set columns and rows",
        'o3': "to change width",
        'o4': "border padding and margin of css",
        'correct': '1'
    }
]


let no = 0;
let qno = 0;
document.getElementById("start").addEventListener("click", () => {
    showResult()
    console.log('clicked')
    document.getElementById('start').style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.body.style.backgroundColor = 'white';
    // document.getElementById('header')
    let count_number = document.getElementById('count-number').innerText;
    console.log(count_number)

    // =============================================================================================> time interval
    countFn();

    // ----------changing the no of question
    no += 1
    document.getElementById('qno').innerText = no;

    // -------------------- changing the question
    document.getElementById('question').innerText = questions[qno].q


    // ------------------- changing the options
    document.getElementById('o1').innerText = questions[qno].o1
    document.getElementById('o2').innerText = questions[qno].o2
    document.getElementById('o3').innerText = questions[qno].o3
    document.getElementById('o4').innerText = questions[qno].o4


    // ==========================================================================>next button
    document.getElementById('next').addEventListener('click', () => {
        console.log("this is next")
        for (i in a) {
            a[i].checked = false
        }
        showResult();
        // countFn();
        count = 16;
        qno += 1
        // ----------changing the no of question
        no += 1
        document.getElementById('qno').innerText = no;

        // -------------------- changing the question
        document.getElementById('question').innerText = questions[qno].q


        // ------------------- changing the options
        document.getElementById('o1').innerText = questions[qno].o1
        document.getElementById('o2').innerText = questions[qno].o2
        document.getElementById('o3').innerText = questions[qno].o3
        document.getElementById('o4').innerText = questions[qno].o4
    })
})


// =============================================================================> function for question changing after 15 seconds
let count = 16
const countFn = () => {
    setInterval(() => {
        showResult()
        document.getElementById('count-number').innerText = count;
        count -= 1
        document.getElementById('count-number').innerText = count;


        if (count == 5) {
            document.getElementById('count-number').style.color = 'red';
        }
        else if (count == 0) {
            count = 15
            console.log("count reached to zero")
            qno += 1
            // ----------changing the no of question
            no += 1
            document.getElementById('qno').innerText = no;

            // -------------------- changing the question
            document.getElementById('question').innerText = questions[qno].q


            // ------------------- changing the options
            document.getElementById('o1').innerText = questions[qno].o1
            document.getElementById('o2').innerText = questions[qno].o2
            document.getElementById('o3').innerText = questions[qno].o3
            document.getElementById('o4').innerText = questions[qno].o4
        }
    }, 1000)
}

// =============================================================================>   function for collecting the ticked choice
let score = 0;
let rList = [
    { 'i': [] },
    { 'i': [] },
    { 'i': [] }
]
let a = document.getElementsByClassName('cs');
let choosed;
const checkFunction = () => {
    for (i in a) {
        if (a[i].checked == true) {
            console.log(a[i].value)
            choosed = a[i].value;
            choosed = String(choosed)
        }
    }
    rList[qno].i.push(choosed[1])
    console.log('this is rList', rList)



    // for (i in rList) {
    //     if (rList[i] == questions[i].correct) {
    //         score += 1
    //     }
    // }

    // () => {
    for (j in questions) {
        let c = rList[j].i
        if (questions[j].correct != c[c.length - 1]) {
            score += 0
        }
        else{
            score += 1
        }
    }
    // }
    console.log('this is score', score)


}
// function checkCorrect = () => {
//     if 
// } 




// =============================================================================> function when all questions are done

const showResult = () => {
    if (no == 4) {
        document.getElementById('main').style.display = 'none';
        // document.getElementById('Questions-div').style.display = 'none';
        // document.getElementById('footer').style.display = 'none'
        document.getElementById('results').style.display = 'block';
        document.getElementById('results').innerText = `This is your ${score}`;
    }
}

document.getElementById('results').style.display = 'none';