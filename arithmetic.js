function arithmetic(words, variables) {

    let op1;
    let op2;

    if (!variables.has(words[0])) {
        console.log(`Error: you don't have variable with name ${words[0]}`)
        process.exit(1)
    }
    else if (words[1] !== '=') {
        console.log("Error: invalid assignment operator");
        process.exit(1);
    }

    else {
        if (words.length === 3) {
            variables.set(words[0], words[2]);
        }
        else {
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

            if (words[3] === "+") {
                variables.set(words[0], op1 + op2)
            }
            else if (words[3] === "-") {
                variables.set(words[0], op1 - op2)
            }
            else if (words[3] === "*") {
                variables.set(words[0], op1 * op2)
            }
            else if (words[3] === "/") {
                variables.set(words[0], op1 / op2)
            }
            else {
                console.log("Error: Unknown arithmetic operator")
                process.exit(1)
            }
        }
    }
}

module.exports = {
    arithmetic
}