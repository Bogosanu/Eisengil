
function grow(evt) {
    evt.target.style.transform = "scale(1.2)";
}



window.onload = function(){
    let scrollcontainer = document.querySelector(".gallery");
    let backbtn = document.getElementById("back");
    let nextbtn = document.getElementById("front");

    //credite galerie
    const p = document.createElement("p");
    const node = document.createTextNode("Font folosit: ");
    p.appendChild(node);
    var cred = document.getElementById("credits");
    cred.appendChild(p);
    var desc = document.getElementById("desc_galerie");
    var stil = window.getComputedStyle(desc);
    p.innerHTML += " " + stil.getPropertyValue("font-family") + ".";


    let scrollpos = 0;
    var scrolling = setInterval(function(){
        if(scrollpos < 3050){
            scrollpos += 1;
            scrollcontainer.scrollLeft += 1;
        } else {
            scrollpos = 0;
            scrollcontainer.scrollLeft = 0;
        }
    }, 5)


    nextbtn.addEventListener("click", grow);
    backbtn.addEventListener("click", grow);


    scrollcontainer.addEventListener("wheel", function(e) {
        e.preventDefault();
        scrollcontainer.scrollLeft += e.deltaY;
        if(scrollcontainer.scrollLeft >= 3000) {
            scrollcontainer.scrollLeft = 100;
        }
        console.log(scrollcontainer.scrollLeft);
        if(scrollcontainer.scrollLeft == 0) {
            scrollcontainer.scrollLeft = 3100;
        }
        scrollcontainer.scrollBehavior = "auto";
        clearInterval(scrolling);

    })
    backbtn.addEventListener("click", function() {
     scrollcontainer.scrollLeft -= 1220;
     if(scrollcontainer.scrollLeft == 0) {
         scrollcontainer.scrollLeft = 3100;
     }
     scrollcontainer.scrollBehavior = "smooth";
     clearInterval(scrolling);
    })


    nextbtn.addEventListener("click", function() {
     scrollcontainer.scrollLeft += 1220;
     if(scrollcontainer.scrollLeft >= 3000) {
         scrollcontainer.scrollLeft = 100;
     }
     scrollcontainer.scrollBehavior = "smooth";
     clearInterval(scrolling);
    })

    nextbtn.addEventListener("click", grow);

}