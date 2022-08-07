function print(words, variables){
    const print_sign= words.indexOf(';');
    let str = '';
    let val;

    words.forEach((element, index) => {
        if(index !== 0){
            if(print_sign !== -1 ) {
                if (element !== ';' && index < print_sign) {
                    str += element + ' ';
                }
            } else str += element + ' ';
            if(element === ';'){
                if(variables.has(words[index + 1])){
                    val = variables.get(words[index + 1])
                }
            }
        }
    })
    if(!val){
        console.log(str);
    } else console.log(str, val);
}

module.exports = {
    print
}