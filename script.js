var colors = [];
var pickedcolor = pickcolor();
var sqnum = 6;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById("colordisplay");
var message = document.querySelector("#message");
colordisplay.textContent = pickedcolor;
var resetb = document.getElementById("reset");
var modebtn = document.getElementsByClassName("mode");


init();

function init(){
    setupmodelisteners();
    setupsquares();
    reset();
}

    function setupsquares(){
        for(var i=0; i< squares.length;i++)

        {
            squares[i].addEventListener("click",function(){
                var clickedcolor = (this.style.backgroundColor);
                if(clickedcolor === pickedcolor)
                {
                  message.textContent="Correct!"; 
                  changecolor(clickedcolor);
                  h1.style.backgroundColor = clickedcolor;
                  resetb.textContent = "Play Again?"
        
                  
                }
                else{
                    this.style.backgroundColor="#232323";
                    message.textContent="Try Again";
                }
            });
            
        }
    }

    function setupmodelisteners(){
        for(var i=0; i<modebtn.length; i++)
        {
        modebtn[i].addEventListener("click",function(){
            modebtn[0].classList.remove("selected");
            modebtn[1].classList.remove("selected");
            this.classList.add("selected");
        this.textContent==="Easy"? sqnum = 3: sqnum = 6;
    
        reset();
        });
        }
    }

    function reset(){
        resetb.textContent = "New Colors";
    colors = generaterandomcolors(sqnum);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    message.textContent = "";
    for(var i=0; i<squares.length; i++)
        {
            if(colors[i])
            {
                squares[i].style.display ="block";
                squares[i].style.backgroundColor = colors[i];
            }
            
            else
            squares[i].style.display ="none";
        }
    h1.style.backgroundColor = "steelblue";
    }
function changecolor(color){
    for(var i=0; i<squares.length; i++)
    {
        squares[i].style.backgroundColor = color;
    }
}
function pickcolor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random]
}
function generaterandomcolors(num){
    var arr = []
    for(var i=0; i<num; i++){
        arr.push(randomcolors());
    }
    return arr;
}
function randomcolors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
resetb.addEventListener("click",function(){
    reset();
    })

