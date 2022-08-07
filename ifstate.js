function ifstate(words, variables, condition_brackets){

    if(words[6] === "{"){
        condition_brackets = true;
    }
    else {
        console.log("Error: Condition brackets doesn't open")
        process.exit(1);
    }

    let op1;
    let op2;
    if (!variables.has(words[2])) {
        if (!isNaN(parseInt(words[2]))) {
            op1 = parseInt(words[2]);
        }
        else op1 = words[2];
    }
    else {
        if (!isNaN(variables.get(words[2]))) {
            op1 = parseInt(variables.get(words[2]));
        }
        else op1 = variables.get(words[2]);
    }

    if (!variables.has(words[4])) {
        if (!isNaN(parseInt(words[4]))) {
            op2 = parseInt(words[4]);
        }
        else op2 = words[4];
    }
    else {
        if (!isNaN(variables.get(words[4]))) {
            op2 = parseInt(variables.get(words[4]));
        }
        else op2 = variables.get(words[4]);
    }


    if(words[3] === '>'){
        return op1 > op2
    }
    else if(words[3] === '<'){
        return op1 < op2
    }
    else if(words[3] === '>='){
        return op1 >= op2
    }
    else if(words[3] === '<='){
        return op1 <= op2
    }
    else if(words[3] === '=='){
        return op1 === op2
    }
    else if(words[3] === '==='){
        return op1 === op2
    }
    else  console.log("Error: Unknown operator")
    process.exit(1)
}

module.exports = {
    ifstate: ifstate
}