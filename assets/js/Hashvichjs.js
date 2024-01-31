const ardyunq = document.getElementById("ardyunq");

function gorc(button){
    ardyunq.value += button;

}

function del(){
    ardyunq.value = "";
}

function hav(){
    ardyunq.value = eval(ardyunq.value)
}
function my_eval(ardyunq){

    if (ardyunq.includes("+")){   
    const chars = ardyunq.split("+");
    result = parseInt(chars[0]) + parseInt(chars[1]);
    }
    else if (ardyunq.includes("-")){   
        const chars = ardyunq.split("-");
        result = parseInt(chars[0]) - parseInt(chars[1]);
    }
    else if (ardyunq.includes("/")){   
        const chars = ardyunq.split("/");
        result = parseInt(chars[0]) / parseInt(chars[1]);
    }
    else if (ardyunq.includes("*")){   
        const chars = ardyunq.split("*");
        result = parseInt(chars[0]) * parseInt(chars[1]);
    }
    else if (ardyunq.includes("%")){   
        const chars = ardyunq.split("%");
        result = parseInt(chars[0]) % parseInt(chars[1]);
    }
}