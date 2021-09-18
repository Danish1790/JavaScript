
var mylist = [];
let addbtn = document.getElementById('addbutton');
addbtn.addEventListener('click', () => {
    let h = document.getElementById('head-input');
    let d = document.getElementById('detail-input');
    console.log('clicked', h, d);
    htext = h.value;
    dtext = d.value;



    myobj = {
        title: htext,
        description: dtext
    }
    mylist.push(myobj)


    console.log(mylist);
    shownotes();
})


const shownotes = () => {
    let html = '';
    mylist.forEach(function (element, index) {
        html += `
    <div id="card-column" class="col-lg-3 col-md-4   col-sm-12   col-12 cards">
        <div class="card ">
        <div class="card-body overflow-auto">
          <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <button type="button" id='${index}' onclick='deletes(this.id)' class="btn btn-primary dbtn " >Delete</button>
        </div>
        </div>
    </div>
    `
    })

    let x = document.getElementById("notes");
    x.innerHTML = html;

    let h = document.getElementById('head-input');
    let d = document.getElementById('detail-input');
    h.value='';
    d.value='';
}

// ===============================================>    Delete 
const deletes = (index) => {
    mylist.splice(index, 1)
    console.log(mylist)
    shownotes();
}

// ================================================>  Search

let searchtxt = document.getElementById('search-txt');
searchtxt.addEventListener('input',()=> {
    searchtxt_value = searchtxt.value;
    let card = document.getElementsByClassName('cards');
    Array.from(card).forEach(function(element){
        cardhead = element.getElementsByTagName('h5')[0].innerText;
        cardtxt = element.getElementsByTagName('p')[0].innerText;

        if (cardtxt.includes(searchtxt_value) || cardhead.includes(searchtxt_value)) {
            element.style.display = "block"
        }
        else {
            element.style.display = "none"
        }
    })
})