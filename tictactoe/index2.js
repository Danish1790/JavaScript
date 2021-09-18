let b0 = document.getElementById('b0').innerHTML;
let b1 = document.getElementById('b1').innerHTML;
let b2 = document.getElementById('b2').innerHTML;
let b3 = document.getElementById('b3').innerHTML;
let b4 = document.getElementById('b4').innerHTML;
let b5 = document.getElementById('b5').innerHTML;
let b6 = document.getElementById('b6').innerHTML;
let b7 = document.getElementById('b7').innerHTML;
let b8 = document.getElementById('b8').innerHTML;



var btns = document.getElementsByClassName("btns");
let paste;
let selected;
let comp;
let canPlay = false;
const selectFn = (event) => {
    canPlay = true;
    console.log("clicked")
    let a = event.target
    selected = a.id
    if (a.id == 'tick') {
        paste = '<i class="fas btns fa-check"></i>';
        comp = '<i class="fas btns fa-times"></i>'
    }
    else {
        paste = '<i class="fas btns fa-times"></i>';
        comp = '<i class="fas btns fa-check"></i>';
    }
}

for (var i in btns) {
    btns[i].onclick = () => { selectFn(event); }
}

// -------------------------------------------------------------------------------------------------------------------------

let win = false;
let boxes = document.getElementsByClassName('bs');
let list = ['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'];
let restricted = [];
let obj = [{ 'a': '' }, { 'a': '' }, { 'a': '' }, { 'a': '' }, { 'a': '' }, { 'a': '' }, { 'a': '' }, { 'a': '' }, { 'a': '' }];


const pasteFn = (event) => {

    if (canPlay == true) {
        if (list.length == 3) {
            lastfn();
            console.log('now make a new functionality')
        }
        console.log("pastefn working")
        let b = event.target;
        let rn = Math.floor(Math.random() * list.length)
        let comSelected = rn

        if (restricted.includes(list[comSelected]) == false) {
            b.innerHTML = paste;

            console.log(`user ne ${b.id} ki inner html ye kar de ----->`, document.getElementById(b.id).innerHTML)
            document.getElementById(list[comSelected]).innerHTML = comp;
            console.log(`compututer ne ${list[comSelected]} ki inner html ye kar de ----->`, document.getElementById(list[comSelected]).innerHTML)
            let d1 = list.indexOf(b.id)
            let d2 = list.indexOf(list[comSelected])
            console.log(`d1 ---> ${d1}   d2 ---> ${d2}`)
            console.log('bs=========>', b0, b1, b2, b3, b4, b5, b6, b7, b8)


            // === removing the indexes that have been called yet
            if (d1 > d2) {
                restricted.push(list[d1])
                restricted.push(list[d2])
                list.splice(d1, 1)
                console.log(`after removal of b.id ===> ${list}`)
                list.splice(d2, 1)
                console.log('restricted is', restricted)
                console.log('bs=========>', b0, b1, b2, b3, b4, b5, b6, b7, b8)
            }
            else if (d1 < d2) {
                restricted.push(list[d1])
                restricted.push(list[d2])
                list.splice(d1, 1)
                console.log(`after removal of b.id ===> ${list}`)
                list.splice(d2 - 1, 1)
                console.log('bs=========>', b0, b1, b2, b3, b4, b5, b6, b7, b8)
        
            }
            else {
                console.log('the d1=d2 write function for it')
                b.id.innerHTML = `nothing`;
                document.getElementById(list[comSelected]).innerHTML = `nothing`;
                console.log('bs=========>', b0, b1, b2, b3, b4, b5, b6, b7, b8)
                alert('select again any box')
            }
            console.log(`the new list is ==========>   ${list}`)
            console.log(`this is restricted ====> ${restricted}`)
        }

        else {
            console.log("in restricted else ")
            if (list.length == 1) {
                lastfn();
                console.log('now make a new functionality')
            }
            let rn2 = Math.floor(Math.random() * list.length)
            let comSelected = rn2;
            if (restricted.includes(list[comSelected]) == false) {
                document.getElementById(list[comSelected]).innerHTML = comp;
                let d1 = list.indexOf(b.id)
                let d2 = list.indexOf(list[comSelected])
                console.log(`d1 ---> ${d1}   d2 ---> ${d2}`)
                // restricted.push(list[comSelect])  
                if (d1 > d2) {
                    restricted.push(list[d1])
                    restricted.push(list[d2])
                    list.splice(d1, 1)
                    console.log(`after removal of b.id ===> ${list}`)
                    list.splice(d2, 1)

                }
                else if (d1 < d2) {
                    restricted.push(list[d1])
                    restricted.push(list[d2])
                    list.splice(d1, 1)
                    console.log(`after removal of b.id ===> ${list}`)
                    list.splice(d2 - 1, 1)
                }
                else {
                    console.log('the d1=d2 write function for it')

                    b.id.innerHTML = `nothing`;
                    document.getElementById(list[comSelected]).innerHTML = `nothing`;

                }
            }

        }
        
    }
    else {
        alert('select tick or cross first')
    }

    // console.log(obj)


}





for (var i in boxes) {
    boxes[i].onclick = () => { pasteFn(event) }
    
}



const lastfn = () => {
    console.log('this is the last fn running')
    console.log('obj is =====> ',obj)
}


