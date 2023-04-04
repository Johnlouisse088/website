//const button = document.querySelector(".settings")
//const remove = document.querySelector(".cancel")
//function option() {
//    if (button.style.display != "none") { 
//        document.querySelector("#navigator").style.right = 0;
//        button.style.display = "none";
//        remove.style.display = "block";   
//        function cancel () {
//            document.querySelector("#navigator").style.right = "-250px";
//            remove.style.display = "none";
//            button.style.display = "block";
//        }
//        remove.addEventListener("click", cancel)
//    }
//}
//
//button.addEventListener("click", option)


const mainprod = document.querySelector(".main-product")
const prods = document.querySelectorAll(".small-product")


prods[0].onclick = function() {
    mainprod.src = prods[0].src;
}
prods[1].onclick = function() {
    mainprod.src = prods[1].src;
}
prods[2].onclick = function() {
    mainprod.src = prods[2].src;
}
prods[3].onclick = function() {
    mainprod.src = prods[3].src;
}
prods[4].onclick = function() {
    mainprod.src = prods[4].src;
}