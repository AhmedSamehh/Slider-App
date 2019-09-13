var imgs = document.getElementsByClassName("item-img");
var lightboxContainer = document.querySelector(".lightbox-container");
var lightboxItem = document.querySelector(".lightbox-item");
var imgsArr = [];
var index = 0;

for (var i = 0; i < imgs.length; i++) {
    imgsArr.push(imgs[i]);
    imgs[i].addEventListener("click", function (e) {
        index = imgsArr.indexOf(e.target);
        lightboxContainer.classList.add("show");
        var imgSrc = e.target.src;
        lightboxItem.style.backgroundImage = "url(" + imgSrc + ")";
    })
}

/////////////////if user want to go next//////////////
var next = document.getElementById("next");
next.addEventListener("click", function (e) {
    
    nextMove();
})    

 function nextMove()
{
    index++;
    if (index == imgsArr.length)
        index = 0;
    lightboxItem.style.backgroundImage = "url(" + imgsArr[index].src + ")";
}
///////////////if user want to go previous////////
var prev = document.getElementById("prev");
prev.addEventListener("click", function (e) {
    prevMove();
})

function prevMove()
{
    index--;
    if (index < 0)
        index = imgsArr.length - 1;
    lightboxItem.style.backgroundImage = "url(" + imgsArr[index].src + ")";
}

var close = document.getElementById("wClose");
close.addEventListener("click", function (e) {
    lightboxContainer.classList.remove("show");
})


lightboxContainer.addEventListener("click",function(e){
    if(e.target == lightboxContainer)
        {
            lightboxContainer.classList.remove("show");
        }
})


document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
        lightboxContainer.classList.remove("show");
    }
    else if (e.keyCode == 37) 
    {
        prevMove();
    }
    else if (e.keyCode == 39) 
    {
        nextMove();
    }
})
