
    // Search
function search() {
    var k = document.getElementById("kw")
    if (k != null) {
        k = k.value
        var items = document.querySelectorAll("div.items > div.item")
        for (var i=0; i< items.length; i++) {
            var h1 = items[i].getElementsByTagName("p")[0].innerText
            if (h1.indexOf(k) >= 0){
                items[i].style.display = "block";
            }
            else 
            {
                items[i].style.display = "none";
            }
        }
    }
}


    // SCROLL TOP
$(document).ready(function() {
    $(".goTop").click(function() {
        $('html, body').animate({scrollTop: 0}, 500)
    })

    // $(".bars").click(function() {
    //     $(".menu").slideToggle()
    // })
})
    // SLIDER
window.addEventListener("load", function() {
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLength = sliderItems.length;
    let positionX = 0;
    let index = 1

    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1)
    })
    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1)
    })

    function handleChangeSlide(direction) {

        if (direction == 1){
            if (index > slidesLength - 2) {
                index = slidesLength - 1
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            index++;
            console.log(index)
            console.log("next slide")
        }
        
        else if (direction == -1) {
            if (index <= 1) {
                index = 1;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            index--;
            console.log(index)
            console.log("previous slide")
        }
    }
})
