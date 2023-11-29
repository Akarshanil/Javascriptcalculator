var isoperated = false;
var oldvalue
var operater
function ButtonActionseven(cal){

    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false

    }else{
        document.getElementById("screen").value+=cal

    }
}
function ButtonActioneight(cal){
    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false

    }else{
        document.getElementById("screen").value+=cal

    }
}
function ButtonActionnine(cal){
    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false


    }else{
        document.getElementById("screen").value+=cal

    }
}
function ButtonActionfour(cal){
    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false


    }else{
        document.getElementById("screen").value+=cal

    }
}
    function ButtonActionfive(cal){
        if(isoperated==true){
            document.getElementById("screen").value=cal
            isoperated=false
    
    
        }else{
            document.getElementById("screen").value+=cal
    
        }
    }

function ButtonActionsix(cal){
    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false


    }else{
        document.getElementById("screen").value+=cal

    }
}
function ButtonActionone(cal){
    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false


    }else{
        document.getElementById("screen").value+=cal

    }
}
function ButtonActiontwo(cal){
    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false


    }else{
        document.getElementById("screen").value+=cal

    }
}
function ButtonActionthree(cal){
    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false


    }else{
        document.getElementById("screen").value+=cal

    }
}
function ButtonActiondot(cal){
    document.getElementById("screen").value+=cal
}
function ButtonActionzero(cal){
    if(isoperated==true){
        document.getElementById("screen").value=cal
        isoperated=false


    }else{
        document.getElementById("screen").value+=cal

    }
}

function clear1(){
    document.getElementById("screen").value=" "

}
function EqualClick(){
    if(operater=='+'){
    var newtext= document.getElementById("screen").value
    var result=parseFloat(oldvalue) + parseFloat(newtext);
    document.getElementById("screen").value=result
    }
    else if(operater=='-'){
        var newtext= document.getElementById("screen").value
        var result=parseFloat(oldvalue) - parseFloat(newtext);
        document.getElementById("screen").value=result
        }
    else if(operater=='*'){
        var newtext= document.getElementById("screen").value
        var result=parseFloat(oldvalue) * parseFloat(newtext);
        document.getElementById("screen").value=result
         }
         else if(operater=='/'){
            var newtext= document.getElementById("screen").value
            var result=parseFloat(oldvalue) / parseFloat(newtext);
            document.getElementById("screen").value=result
            }
    


   


}
function operationdiv(cal){
    isoperated=true
     oldvalue = document.getElementById("screen").value
     operater='/'

}
function operationmul(){
     isoperated=true
    oldvalue = document.getElementById("screen").value
    operater='*'

}
function operationsub(){
     isoperated=true
     oldvalue = document.getElementById("screen").value
     operater='-'

}
function operationplus(){
     isoperated=true
     oldvalue = document.getElementById("screen").value
     operater='+'

}