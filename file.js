var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName('thumbnail');
    for (i = 0; i < slides.length; i++) {
        if (i !== slideIndex) {
            slides[i].style.display = "none";
        } else {
            slides[i].style.display = "block"
        }

    }
    slideIndex = (slideIndex + 1) % 6
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function colorchange(num) {
    var color=document.getElementById("clr").style.color;
    if(num==2)
    {
        document.getElementById("clr").style.color="white";   
    }
    if(num==1){
        document.getElementById("clr").style.color="grey";
    }
    if(num==3){
        document.getElementById("clr2").style.color="grey";
    }
    if(num==4){
        document.getElementById("clr2").style.color="white";
    }
}
function imgChng() {
    document.getElementById("changing").style.backgroundImage=url("white-user.png");
    console.log("yes");
}
function normImg(){
    document.getElementsByClassname("changing").style.backgroundImage=url("user.png");
}