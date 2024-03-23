document.title = "saya"
const body = document.body
console.log(body)



const namaKamu = document.createElement('p')
namaKamu.innerHTML = "<marquee>naufal</marquee>"
// namaKamu.tex
const text = document.get
body.append(namaKamu)

var abc = document.getElementById("content");
var muncul = document.getElementById("over");
var display = 1;
var notDisplay = 1;

function triggerButton() {
    if (display == 1) {
         abc.style.display = "block";
         display = 0;
    }else{
        abc.style.display = 'none';
        display = 1;
    }
}

function munculin() {
    if (notDisplay == 1) {
        muncul.style.display = "flex";
        notDisplay = 0;
    }else{
        muncul.style.display = "none";
        notDisplay = 1;
    }

function kembalikanText() {
    muncul.style.display = "none";
}

    // alert("heheh")
}

var munculKata = document.querySelector("p")


function munculDiv() {
    const newText = document.createElement('p')
    newText.textContent = "NAMA SAYA ADALAH NAUFAL"

    body.append(newText)
}

function ubahWarna() {
    munculKata.style.backgroud = "red"
}
