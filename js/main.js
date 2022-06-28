var liList =[]
var ulTagArray = []
var slideIndex = 0

function ulTagMaker(e){
    liList = document.querySelectorAll(".btn_header");
    for( var i=0; i<liList.length; i++) {
        ulTagArray.push("#" + liList[i].parentElement.id + " ul")
        console.log(ulTagArray)
    }
}

function unroll(tag){
    console.log(tag)

    document.querySelector(tag).style.display = "block";
    var max = document.querySelector(tag).childElementCount;
    for(i=1; i<max*450-100; i++){
        (function(x){
            setTimeout(function(){
                document.querySelector(tag).style.height = x/10+"px"
            }, x/4);
        })(i);
    }

    document.querySelector(tag).addEventListener("mouseover",function (){keep_unroll(tag)})
}
function keep_unroll(tag){
    tag= tag + " li"
    console.log(tag)
    document.querySelector(tag).style.display = "block";
    document.querySelector(tag).style.color = "#b21e23"
}
function reroll(tag){
    console.log(tag)
    document.querySelector(tag).style.display = "none";
}
function saver(tag){

}

function mouseMover(e){
    for(z=0; z<5; z++){
        for(i=-6000; i<-3000; i++){
            (function(x){
                setTimeout(function(){
                    document.querySelector("#mouse").style.bottom = x/100+"px"
                }, (x/-4)+z*9000);
            })(i);
        }
        for(i=-3000; i>-6000; i--){
            (function(x){
                setTimeout(function(){
                    document.querySelector("#mouse").style.bottom = x/100+"px"
                }, (x/-4)+3000+z*9000);
            })(i);
        }
        for(i=-6000; i<-5000; i++){
            (function(x){
                setTimeout(function(){
                    document.querySelector("#mouse").style.bottom = x/100+"px"
                }, (x/-4)+3000+z*9000);
            })(i);
        }
    }

}
function scroller(e){
    var location = document.querySelector("#icons").offsetTop;
    window.scrollTo({top:location, behavior:"smooth"})
}

function slider_right(e){
    var slidingContentsWrap = document.querySelector(".slideContents")
    var slidingContents = document.querySelectorAll(".slideContents li")
    var len = slidingContents.length
    var temp=slidingContentsWrap.cloneNode(true)
    var tempLi = slidingContents[0].cloneNode(true)
    if (slideIndex==len-1){
        slidingContentsWrap.appendChild(tempLi);
        slideIndex = slideIndex+1;
        console.log("끝"+slideIndex)
        for(var s= (slideIndex) * (-1005); s< (slideIndex-1) * (-1005) ; s++){
            (function(x){
                console.log(x);
                setTimeout(function(){
                    slidingContentsWrap.style.marginLeft = x/10 + '%';

                }, -x/(slideIndex+1));
            })(s);
        }
        setTimeout(function(){
            slidingContentsWrap.style.marginLeft = 1+"px";
            slidingContentsWrap.style.marginLeft = 0+"px";
            console.log("여기")
            slidingContentsWrap.removeChild(slidingContentsWrap.lastChild)
            slideIndex=0;
            buttonChanger()
        }, 750);
    }else {
        slideIndex = slideIndex+1;
        console.log("시작"+slideIndex)
        for(var s= (slideIndex) * (-1005); s< (slideIndex-1) * (-1005) ; s++){
            (function(x){
                console.log(x);
                setTimeout(function(){
                    slidingContentsWrap.style.marginLeft = x/10 + '%';
                    if(x>(slideIndex-1) * (-1005) - 2 ){
                        slidingContentsWrap.style.marginLeft = (slideIndex) * (-100.5) + '%';
                    };
                }, -x/(slideIndex+1));
            })(s);
        }
    }
    buttonChanger()
}

function slider_left(e){
    var slidingContentsWrap = document.querySelector(".slideContents")
    var slidingContents = document.querySelectorAll(".slideContents li")
    var len = slidingContents.length
    var temp=slidingContentsWrap.cloneNode(true)
    var tempLi = slidingContents[len-1].cloneNode(true)
    if (slideIndex==0){
        slidingContentsWrap.insertBefore(tempLi,slidingContentsWrap.firstChild);
        slideIndex = len-1;
        slidingContentsWrap.style.marginLeft = '-100.5%';
        for(var s = 1005; s> 0 ; s--){
            (function(x){
                console.log(x);
                setTimeout(function(){
                    slidingContentsWrap.style.marginLeft = - 100.5 + x/10 + '%';

                }, x/1.5);
            })(s);
        }
        setTimeout(function(){
            slideIndex = len-1;
            slidingContentsWrap.style.marginLeft = - slideIndex * 100.5 +"%"
            slidingContentsWrap.removeChild(slidingContentsWrap.firstChild)
            buttonChanger()
        }, 700);
    }else {
        console.log("시작"+slideIndex)
        for(var s = 1005; s> 0 ; s--){
            (function(x){
                console.log(x);
                setTimeout(function(){
                    slidingContentsWrap.style.marginLeft = -100.5 * (slideIndex) + x/10 + '%';

                }, x/1.5);
            })(s);
        }
        setTimeout(function(){
            slideIndex = slideIndex-1;
            slidingContentsWrap.style.marginLeft = - slideIndex * 100.5 +"%"
            buttonChanger()
        }, 700);
    }
    buttonChanger()
}

function buttonChanger(e){
    var buttons = document.querySelectorAll(".slideButton li button")
    for(n = 0; n < buttons.length; n++){
        console.log("real"+slideIndex)
        if (n==slideIndex){
            buttons[n].style.width= "20px";
            buttons[n].style.backgroundColor ="#b21e23";
        }else{
            buttons[n].style.width= "10px";
            buttons[n].style.backgroundColor ="gray";
        }
    }
}

function buttonClicker(e){
    console.log(this)
    var btn = this
    var buttons = document.querySelectorAll(".slideButton button")
    for(i = 0; i<buttons.length; i++){
        if (buttons[i]==btn){
            if(slideIndex<i){
                if(i - slideIndex == 1){
                    slider_right()
                }else{
                    for(t = 0; t < i - slideIndex - 1; t++){
                        (function(x){
                            slider_right()
                            setTimeout(function(){
                                slider_right()
                            }, 755);
                        })(t);
                    }
                }
            }else if(slideIndex>i){
                if(slideIndex - i == 1){
                    slider_left()
                }else{
                    for(t = 0; t < slideIndex - i - 1; t++){
                        (function(x){
                            slider_left()
                            setTimeout(function(){
                                slider_left()
                            }, 720);
                        })(t);
                    }
                }
            }else{

            }

        }else{
        }
    }
}

function scrollup(e){
    window.scrollTo({top:screenTop, behavior:"smooth"})
}


function onWindowLoaded(e){
    var buttons = document.querySelectorAll(".slideButton button")

    ulTagMaker()
    liList[0].addEventListener("mouseover", function (){unroll(ulTagArray[0])});
    liList[0].addEventListener("mouseout", function (){reroll(ulTagArray[0])});
    liList[1].addEventListener("mouseover", function (){unroll(ulTagArray[1])});
    liList[1].addEventListener("mouseout", function (){reroll(ulTagArray[1])});
    liList[2].addEventListener("mouseover", function (){unroll(ulTagArray[2])});
    liList[2].addEventListener("mouseout", function (){reroll(ulTagArray[2])});
    buttonChanger()
    document.querySelector("#mouse svg").addEventListener("click", scroller)
    document.querySelector("#rightBtn").addEventListener("click", slider_right)
    document.querySelector("#leftBtn").addEventListener("click", slider_left)
    document.getElementById("pageUp").addEventListener("click", scrollup)
    console.log(buttons)
    buttons[0].addEventListener("click",buttonClicker)
    buttons[1].addEventListener("click",buttonClicker)
    buttons[2].addEventListener("click",buttonClicker)

}

window.addEventListener("load", mouseMover)

window.addEventListener("load",onWindowLoaded)
