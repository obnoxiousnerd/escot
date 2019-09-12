var submit = document.querySelector("#submit");
var output = document.querySelector("#formula");
var name;
document.getElementById("userChem").addEventListener('change', function (event) {
    name = event.target.value;
    formulaIt(name);
});
submit.addEventListener('click', function(){
    formulaIt(name);
});
function formulaIt(name){
    if(name.endsWith('ane')){
        alkane(name);
    }

    else if(name.endsWith('ene') && name !='acetylene' ){
        alkene(name);
    }

    else if(name.endsWith('yne') ||  name =='acetylene'){
        alkyne(name);
    }

    else if(name.endsWith('oic acid')){
        carboxylicAcid(name);
    }

    else{
        output.textContent = "Couldn't fetch the formula";
    }
}
