document.title = "saya"
const body = document.body
console.log(body)



const namaKamu = document.createElement('p')
namaKamu.innerHTML = "<marquee>nama saya adalah naufal nama  saya adalah naufal</marquee>"
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

const d = new Date();

const e = new Date();
const f = new Date();

let time = d.getTime();
document.getElementById("waktu").innerHTML = time;

let diffrent = e.getTimezoneOffset();
document.getElementById("waktuutc").innerHTML = diffrent;



document.getElementById("waktuText").innerHTML = d;

let asli = time + diffrent;
document.getElementById("waktuasli").innerHTML= asli;

console.log(time)
console.log(d)

// function getServerTime() {
//     return $.ajax({async: false}).getResponseHeader( 'Date' );
//   }
//   console.log('Server Time: ', getServerTime());
//   console.log('Locale Time: ', new Date(getServerTime()));


// const AA = 10
// const BB = 3

// let hasil = AA - BB

// document.getElementById("sama").innerHTML = hasil;
// alert('hey')
// console.log('hey you');

// let nama = prompt('Siapa nama anda ?')
// alert('Senang bertemu dengan anda ' + nama)

// const namaAnda = document.createElement("p")
// namaAnda.innerHTML = nama
// body.append(namaAnda)

// let saldoAwal = 500000
// // let saldoTambahan 


// let saldoTambahan = prompt("Saldo awal anda adalah Rp" + saldoAwal + " dan saldo tambahan anda adalah ?")

// const saldoAkhir = saldoAwal + saldoTambahan

// alert("jadi total saldo anda adalah Rp" + saldoAkhir)

const namaNama = ['naufal', 'reyhan', 'adit', 'ryan', 'zikri', 'adam', 'arif']
let data 

// for(let ii = 0; ii <4; ii++){
//     let tableBaru = document.createElement("table")
//     tableBaru.innerHTML = ""
// } 

let i = -1
while (i<namaNama.length-1){
    
    o = i+2
    i++
    document.getElementById("bodyTable").innerHTML +=
    "<tr><td id='numberTable'>"+ o +"</td><td>"+ namaNama[i] +"</td></tr>"
    
}

for(i = 0; i < namaNama.length; i++){
    o = i+1

    document.getElementById("bodyTable1").innerHTML +=
    "<tr><td id='numberTable'>"+ o +"</td><td>"+ namaNama[i] +"</td></tr>"
}

i = 1
// do{
//     // console.log("naufal " + i)
//     document.getElementById("bodyTable").innerHTML +=
//     "<tr><td id='numberTable'>"+ o +"</td><td>"+ namaNama[i] +"</td></tr>"
//     i++
// }while(i<10)


let tanggal = new Date().getDay()
let hari
switch (tanggal) {
    case 1: 
        hari = "Senin"
        break;
    case 2: 
        hari = "Selasa"
        break;
    case 3: 
        hari = "Rabu"
        break;
    case 4: 
        hari = "Kamis"
        break;
    case 5: 
        hari = "Jum'at"
        break;
    case 6: 
        hari = "Sabtu"
        break;
    case 7: 
        hari = "Minggu"
        break;

    default:
        break;
}


// alert("sekarang hari "+ hari)

const tubuh = document.body

console.log(tubuh)

const arraySaya = ['naufal', 'adit' ,'arif', 'randra', 'alif']

console.log(arraySaya.join("."))

const arrayKamu = new Array()
arrayKamu[0] = 'adit'
arrayKamu[1] = 'rehan'

let arrayBaru = new Array()
arrayArray = arraySaya.concat(arrayKamu)
console.log("arrayArray " + arrayArray)

// console.log(arraySaya.toLocaleString())
// console.log(arraySaya[1])

const cari = 'arif'

if(arraySaya.includes(cari)){
    let hasilCari = arraySaya.indexOf(cari)
    console.log(hasilCari)
    console.log(arraySaya[hasilCari])
}else {
    console.log("saya tidak tahu")
}
let posisi 
// let baru = "Iky"
const setelah = posisi + 1 
const sebelum = posisi -1
console.log("sebelum "+ arraySaya[1] + " adalah " + arraySaya[sebelum])
console.log("setelah "+ arraySaya[1] + " adalah " + arraySaya[setelah])

let baru = prompt("apakah yang ingin anda masukkan ?")
let posisiBaru = prompt("pada posisi setelah apa ?")

let hasilPosisiBaru = arraySaya.indexOf(posisiBaru)
let setelahBaru = hasilPosisiBaru + 1 

// console.log(hasilBaru)
console.log(arraySaya.length)

// let

for(let i = setelahBaru; i<arraySaya.length; i++){
    console.log("coba lagi "+ hasilPosisiBaru + 1)

    // let hehe = arraySaya[hasilBaru]
}
for(let i = 0; i<10; i++){
    console.log("i saja - "+i)
}


console.log("coba " + setelahBaru)