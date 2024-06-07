document.title = "Naufal"

const body = document.body
// body.append(title)

const heading = document.createElement("h1")

heading.textContent = "Selamat datang ke Blog kami :)"

const paragraph = document.createElement("p")
paragraph.innerHTML = "hello"

const tombol2 = document.createElement("button")
tombol2.innerHTML = "tombol 2"

body.append(tombol2)

body.append(heading)
body.append(paragraph)

// const styleParagraph = document.getElementsByTagName("p")
// styleParagraph.style.color = "red"
document.getElementsByTagName("p")[0].innerHTML = "Hello World"

const btn1 = document.getElementById("tombol1")

btn1.style.fontSize = "larger"
btn1.style.backgroundColor = "blue"
btn1.style.color = "white"
btn1.style.fontWeight ="800"
btn1.style.width = "100px"
btn1.style.height = "50px"
btn1.style.borderRadius = "10px"

const btn2 = document.querySelector("button")

console.log(btn2)
btn2.innerHTML = "hehe"

// body.append(btn2)
let nomor = 0
function gantiWarna(){
    console.log(nomor)
    if(nomor % 2){
        console.log("ganjil")
        btn1.style.backgroundColor = "blue"
    }else{
        console.log("genap")
        btn1.style.backgroundColor = "red"
    }
    nomor++
}
let o = 0
const munculSaja = document.getElementById("muncul")
function munculText(){
    const munculSaja = document.getElementById("muncul")
    
    // alert("heheh")
    munculSaja.style.display = "flex"
    // console.log(o)
    // if(o % 2){
    //     console.log("ganjil")
    //     munculSaja.style.display = "flex"
    // }else{
    //     console.log("genap")
    //     munculSaja.style.display = "none"
    // }

    // o++
}

function tidakMunculText(){
    munculSaja.style.display = "none"
}