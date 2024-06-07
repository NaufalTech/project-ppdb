var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    scrollbar: {
        el:'.swiper-scrollbar',
    },

    spaceBetween: 30,
    centeredSlides: true,

    // autoplay: {
    //   delay: 10000,
    //   disableOnInteraction: false,
    // },

})


// var mySwiper
// const swiper = new swiper('.swiper-container', {

function buttonFilter() {
    document.getElementById("daftar-filter").style.display = "grid";
}

function exitButtonFilter() {
    document.getElementById("daftar-filter").style.display = "none"
}

// function buttonFilter() {
//     document.getElementById("daftar-filter").style.display = "grid";
// }

// let bi = document.getElementById("bi-number").getco

// console.log(bi)

let i = 0
const status_pendaftaran = document.getElementsByClassName('button-status-pendaftaran')

function statusPendaftaran(){
    i++
    console.log(i)
    if (i % 2){
        // console.log('ganjil')
        status_pendaftaran.innerText = "Telah diverivikasi"
        status_pendaftaran.style.backgroundColor = "green !important"
    }else{
        // console.log('genap')
        status_pendaftaran.innerText = "Belum diverivikasi"
        status_pendaftaran.style.backgroundColor = "blue !important"
    }
}
let buttonMenuAdminVar = 0
const docButtonMenuAdminVar = document.getElementById("navbarMenuAdmin")
function buttonMenuAdmin() {
    buttonMenuAdminVar ++
    
    if(buttonMenuAdminVar % 2) {
        // console.log
        console.log(buttonMenuAdminVar)
        docButtonMenuAdminVar.setAttribute("style","display: grid !important;")

    }else{
        console.log(buttonMenuAdminVar)
        docButtonMenuAdminVar.setAttribute("style","display: none !important;")
    }
}