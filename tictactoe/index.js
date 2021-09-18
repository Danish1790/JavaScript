
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



// ==================================================> function after choosing tick and cross

let boxes = document.getElementsByClassName('bs');
let list = ['b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8'];
let restricted = [];
const pasteFn = (event) => {
    if (canPlay == true) {
        if(list.length == 3){
            console.log('now make a new functionality')
        }
        console.log("pastefn working")
        let b = event.target;
        let x = 9;
        let rn = Math.floor(Math.random() * x)
        let comSelected = rn
        if (list[comSelected] == b.id) {
            console.log('same selected by machine')
            let nrn = Math.floor(Math.random() * list.length);
            comSelected = nrn

            if (restricted.includes(list[comSelected]) == false) {
                b.innerHTML = paste;
                document.getElementById(list[comSelected]).innerHTML = comp;
                let d1 = list.indexOf(b.id)
                let d2 = list.indexOf(list[comSelected])
                console.log(`d1 ---> ${d1}   d2 ---> ${d2}`)
                if (d1 == 8) {
                    list.pop()
                }
                else if (d2 == 8) {
                    list.pop()
                }

                // === removing the indexes that have been called yet
                if (d1 > d2) {
                    list.splice(d1, 1)
                    console.log(`after removal of b.id ===> ${list}`)
                    list.splice(d2, 1)
                    restricted.push(list[d1])
                    restricted.push(list[d2])
                }
                else if (d1 < d2) {
                    list.splice(d1, 1)
                    console.log(`after removal of b.id ===> ${list}`)
                    list.splice(d2 - 1, 1)
                    restricted.push(list[d1])
                    restricted.push(list[d2])
                }
                console.log(`the new list is ==========>   ${list}`)
                console.log(`this is restricted ====> ${restricted}`)
            }
            else {
                let rn2 = Math.floor(Math.random() * list.length)
                let new_comSelect = rn2;
                if (restricted.includes(list[new_comSelect]) == false) {
                    document.getElementById(new_comSelect).innerHTML = comp;
                    restricted.push(list[new_comSelect])
                    console.log("in restricted else ")
                }

            }
        }
        else {
            console.log("=====================================--------------------------=======-=--- same nahi aya its ok")
            if (restricted.includes(list[comSelected]) == false) {
                b.innerHTML = paste;
                document.getElementById(list[comSelected]).innerHTML = comp;
                let d1 = list.indexOf(b.id)
                let d2 = list.indexOf(list[comSelected])
                console.log(`d1 ---> ${d1}   d2 ---> ${d2}`)
                if (d1 == 8) {
                    list.pop()
                }
                else if (d2 == 8) {
                    list.pop()
                }

                // === removing the indexes that have been called yet
                if (d1 > d2) {
                    list.splice(d1, 1)
                    console.log(`after removal of b.id ===> ${list}`)
                    list.splice(d2, 1)
                    restricted.push(list[d1])
                    restricted.push(list[d2])
                }
                else if (d1 < d2) {
                    list.splice(d1, 1)
                    console.log(`after removal of b.id ===> ${list}`)
                    list.splice(d2 - 1, 1)
                    restricted.push(list[d1])
                    restricted.push(list[d2])
                }
                console.log(`the new list is ==========>   ${list}`)
                console.log(`this is restricted ====> ${restricted}`)
            }
            else {
                let rn2 = Math.floor(Math.random() * list.length)
                let new_comSelect = rn2;
                if (restricted.includes(list[new_comSelect]) == false) {
                    document.getElementById(new_comSelect).innerHTML = comp;
                    restricted.push(list[new_comSelect])
                    console.log("in restricted else ")
                }

            }
        }




    }
    else {
        alert('select tick or cross first')
    }

}


for (var i in boxes) {
    boxes[i].onclick = () => { pasteFn(event) }
}








// let rn1 = Math.floor(Math.random() * 6)
        // let list = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6']
        // computer_selected = list[rn1]
        // if (b.id != computer_selected) {
        //     document.getElementById(`${computer_selected}`).innerHTML = `${comp}`
        //     // console.log(`this is computer selected------->${computer_selected} and this is choice of comp--->${comp}`)
        // }
        // else if (b.id == computer_selected) {
        //     console.log("same detected")
        //     let list2=[];
        //     for(var i=0;i<list.indexOf(computer_selected)-1;i++){
        //         list2.push(list[i])
        //     }
        //     let list3=[];
        //     for(var j=list.indexOf(computer_selected)+1;j<list.length;j++){
        //         list3.push(list[j])
        //     }
        //     console.log(list2,list3)
        //     // console.log("computer choosed your option ")
        // }