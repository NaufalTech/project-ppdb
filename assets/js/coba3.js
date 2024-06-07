document.title = "hehe"
let body = document.body
console.log(body)

const tombol2 = document.createElement("button")
tombol2.innerHTML = "heheh"
body.append(document.createElement("button"))
const tombol = document.getElementsByTagName("button")
tombol[1].innerHTML = "tombol 2" 

tombol[1].style.backgroundColor = "pink"
tombol[1].style.color = "blue"
tombol[1].style.fontSize = "x-large"

function dis(val){
    // console.log(val)
    document.getElementById("hasil").innerHTML += val
}

function dis(val){
    // if(val === "tambah" || 
    // val === "kurang" ||
    // val === "kali" ||
    // val === "bagi" ){
    //     console.log("add key")
    // }ifelse(val = "koma"){
    //     console.log("koma pertama")
    // }else{
    //     console.log("none")
    // }
    
    switch (val) {
        case "tambah":
            console.log("operator key")
            break;
        
        case "kurang":
            console.log("operator key")
            break;

        case "kali":
            console.log("operator key")
            break;

        case "bagi":
            console.log("operator key")
            break;

        case "koma":
            console.log("koma key")
            break;

        case "bersih":
            console.log("clear key")
            break;

        case "hasil":
            console.log("hasil key")
            break;

        default:
            console.log("number key")
            break;
    }

}

let x = "5+4+5"
let y = math.evaluate(x)
// console.log(y
document.querySelector(".hasil").textContent = y
// document.
// const a = ma