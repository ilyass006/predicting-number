

let hv = document.getElementById("hi2");
let iv = document.getElementById("ii1");

let n=0,counter = 0;

iv.addEventListener("keypress", function (event) {
    // detect event key
    if (event.keyCode == 13) {
    
        bf1();

    }
 });

function bf1()
{
    if(counter >= 5) {hv.innerHTML  = "You faild 5 times . please create new hide number "; return 0 }
    counter++;
    
    console.log(counter,iv.value,n);
    if (iv.value == n)
    {
        hv.innerHTML = `Congrulation, your predict is correct. Youn can find ${counter}. trting.`;
        hv.style.backgroundColor = "green"
    }
    else
    {
        if(iv.value < n)
        {hv.innerHTML  = "Predict is wrong , enter larger number ";}
        else{hv.innerHTML  = "Predict is wrong , enter smaller number ";}
        hv.style.backgroundColor = "red";
    }

    iv.value = null;
    

}

let hi1_v = document.getElementById("hi3");
function bf2()
{
    if(hi1_v.innerHTML == "-"){hi1_v.innerHTML = n;}
    else {hi1_v.innerHTML = "-";}
    
}

function pf1()
{
    counter = 0;
    n = Math.floor((Math.random() * 10) + 1);
}

function pf2()
{
    counter = 0;
    n = Math.floor((Math.random() * 100) + 1);
}