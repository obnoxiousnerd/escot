const alkane = function(name){
    var c, h;
    var formula;
    if(name.startsWith('meth')){
        c = 1;
        h = (c * 2)+2;
        if(c===1){
            c = "";
        }
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }
    else if(name.startsWith('eth')){
        c = 2;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('prop')){
        c = 3;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('but')){
        c = 4;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('pent')){
        c = 5;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('hex')){
        c = 6;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('hept')){
        c = 7;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('oct')){
        c = 8;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('non')){
        c = 9;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('dec')){
        c = 10;
        h = (c * 2)+2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else{
        output.textContent = "Couldn't fetch the formula alkane";
    }
}


function alkene(name){
    var c, h;
    var formula;
    if(name.startsWith('meth')){
        output.textContent = 'does not exist!';
    }

    else if(name.startsWith('eth')){
        c = 2;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('prop')){
        c = 3;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('but')){
        c = 4;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('pent')){
        c = 5;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('hex')){
        c = 6;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('hept')){
        c = 7;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('oct')){
        c = 8;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }
    else if(name.startsWith('non')){
        c = 9;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('dec')){
        c = 10;
        h = (c * 2);
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else{
        output.textContent = "Couldn't fetch the formula alkene";
    }
}

const alkyne = function(name){
    var c, h;
    var formula;
    if(name.startsWith('meth')){
        output.textContent = 'does not exist!';
    }

    else if(name.startsWith('eth') || name.includes('acetylene')){
        c = 2;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('prop')){
        c = 3;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('but')){
        c = 4;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('pent')){
        c = 5;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('hex')){
        c = 6;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('hept')){
        c = 7;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('oct')){
        c = 8;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }
    else if(name.startsWith('non')){
        c = 9;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else if(name.startsWith('dec')){
        c = 10;
        h = (c * 2)-2;
        formula = 'C' + c + 'H' + h;
        output.textContent = formula;
    }

    else{
        output.textContent = "Couldn't fetch the formula alkyne";
    }
}

const carboxylicAcid = function(name){
    var c, h;
    var formula;
    if(name.startsWith('meth')){
        c = 1;
        h = (c * 2)+1;
        if(c===1){
            c = "";
        }
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else if(name.startsWith('eth')){
        c = 2;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else if(name.startsWith('prop')){
        c = 3;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else if(name.startsWith('but')){
        c = 4;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else if(name.startsWith('pent')){
        c = 5;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else if(name.startsWith('hex')){
        c = 6;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else if(name.startsWith('hept')){
        c = 7;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else if(name.startsWith('oct')){
        c = 8;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }
    else if(name.startsWith('non')){
        c = 9;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else if(name.startsWith('dec')){
        c = 10;
        h = (c * 2)+1;
        formula = 'C' + c + 'H' + h + 'COOH';
        output.textContent = formula;
    }

    else{
        output.textContent = "Couldn't fetch the formula alkyne";
    }
}
const haloalkene = function)(name){}