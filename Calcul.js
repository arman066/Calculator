
    let screen= document.querySelector(".screen");
    let buttons= document.querySelectorAll(".btn");
    let clear= document.querySelector(".red");
    let equal= document.querySelector(".green");
    let specialChars = ["%", "+", "-", "/","x", "=" ];


    buttons.forEach(function(button){
        button.addEventListener("click",function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener("click", function(e){
            let answer =my_eval(screen.value);
            screen.value = answer;
    })

    clear.addEventListener("click", function(e){
        screen.value = '';
    })
    function my_eval(input){
        if(input.includes("+")){
            const chars = input.split("+");
            result = parseInt(chars[0]) + parseInt(chars[1]);
        }
        else if(input.includes("-")){
            const chars = input.split("-");
            result = parseInt(chars[0]) - parseInt(chars[1]);
        }
        else if(input.includes("/")){
            const chars = input.split("/");
            result = parseInt(chars[0]) / parseInt(chars[1]);
        }
        else if(input.includes("x")){
            const chars = input.split("x");
            result = parseInt(chars[0]) * parseInt(chars[1]);
        }
        else if(input.includes("%")){
            const chars = input.split("%");
            result = parseInt(chars[0]) % parseInt(chars[1]);
        }
        return result;
       
    }