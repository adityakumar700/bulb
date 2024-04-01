let changeOn=document.querySelector(".on");
    let changeOff=document.querySelector(".off");

    let btn=document.getElementById("btn");
    function displayDate(e){
        if(btn.textContent === 'on') { 
            btn.textContent= "off";
        changeOff.style.display = 'none'
        changeOn.style.display = 'block'
        }
        else{
            btn.textContent="on";
        //    change.src="https://images3.alphacoders.com/275/thumb-1920-275855.jpg";
        changeOff.style.display = 'block'
        changeOn.style.display = 'none'
        }
    }

btn.addEventListener("click", displayDate);