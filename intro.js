let buttons = document.querySelector('.buttons');
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');
for(let i=0; i<btn.length; i++)
{
    btn[i].addEventListener("click",function()
    {
        if(this.innerHTML=='=')
        {
            value.innerHTML = eval(value.innerHTML);
        }
        else
        {
            if(this.innerHTML=="clear")
            {
                value.innerHTML = "";
            }
            else if(this.innerHTML==="Back")
            {
               let result = value.innerHTML;
               value.innerHTML = result.slice(0,result.length-1);
               
              // value.innerHTML = result;
                
            }
            else if(this.innerHTML=="sroot")
            {
                value.innerHTML *=value.innerHTML;
            }
            else if(this.innerHTML =="sqrt3")
            {
                let answer = value.innerHTML*value.innerHTML*value.innerHTML;
                value.innerHTML = answer;
            }
            else if(this.innerHTML=="pie")
            {
                value.innerHTML = 3.14;
            }
            else if(this.innerHTML == "%")
            {
                
            }
            else if(this.innerHTML == "sin")
            {
                let ans = 180/value.innerHTML;
                value.innerHTML = Math.sin(Math.PI/ans);
            }
            else if(this.innerHTML == "cos")
            {
                let ans = 180/value.innerHTML;
                value.innerHTML = Math.cos(Math.PI/ans);
            }
           else if(this.innerHTML == "unroot")
           {
            value.innerHTML = Math.sqrt(value.innerHTML);
           }
           else if(this.innerHTML == "!")
           {
            let i=1;
            let fact=1;
            for(i=1; i<=value.innerHTML; i++)
            {
                fact *= i; 
                
            }
            value.innerHTML = fact;0
           }
            else
            {
                value.innerHTML += this.innerHTML;
            }
        }
    })
}


document.addEventListener("keypress", function(event)
{
    makepress(event.key);
})

function makepress(key)
{
    if(key=='=')
        {
            value.innerHTML = eval(value.innerHTML);
        }
        else
        {
            if(key=="d")
            {
                value.innerHTML= "";
            }
            else
            {
                value.innerHTML += key;
            }
        }

}
toggleBtn.onclick = function()
{
    body.classList.toggle('dark');
}
// function sin()
// {
   
// }
