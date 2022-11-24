







window.addEventListener("scroll", muncul);
function muncul(){
    let items = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++){
        let Tlayar = window.innerHeight;
        let Jitem = items[i].getBoundingClientRect().top;
        let Uscrol = 150;
        if ( Jitem < Tlayar - Uscrol){
            items[i].classList.add("tampil");
        } else{
            items[i].classList.remove("tampil")
        }
    }
}