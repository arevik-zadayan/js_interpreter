function var_declaration(words, variables){
    if(/^\d/.test(words[1])){
        console.log("Error: Variable name started with number");
        process.exit(1);
    }
    else if(words.length === 2) {
        console.log("Warning: Initialize your variable!");
        process.exit(1);
    }
    else if(words[2] !== '=') {
        console.log("Error: invalid assignment operator");
        process.exit(1);
    }
    else if(variables.has(words[1])){
        console.log(`Error: Variable with name ${words[1]} already exists`);
        process.exit(1);
    }
    else variables.set(words[1], words[3]);
}

module.exports = {
    var_declaration
};
