const fs = require('fs');
const { var_declaration } = require("./declare_vars");
const { print } = require("./print");
const { arithmetic } = require("./arithmetic");
const { ifstate } = require("./ifstate");
const txt = fs.readFileSync('./txt.txt', 'utf-8');



const variables =  new Map()
let condition_brackets = false;
let istrue = false;

function read_file(txt) {

    const line = txt.split('\n');

    for (let i = 0; i < line.length; i++) {

        let words = line[i].trim().split(/\s+/);

        if (condition_brackets) {
            if (!istrue) {
                continue;
            }
        }

        if (words[0] === '}') {
            condition_brackets = false;
        }
        else if (words[0] === "перем") {
            var_declaration(words, variables);
        }
        else if (words[0] === "печатай") {
            print(words, variables);
        }
        else if (words[1] === '=') {
            arithmetic(words, variables);
        }
        else if (words[0] === 'если') {
            istrue = ifstate(words, variables, condition_brackets);
        }
    }

}

if(!txt){
    console.log("Error while opening file");
} else {
    read_file(txt)
}


