let args = process.argv.slice(2);
let chars = [];
let cadena = "";

function findLastIndex(array, item) {
    var index = array.slice().reverse().findIndex(x => x.type === (item === ')' ? "parentesis": item ===']'? "corchetes" : "llaves") && !x.closed);
    var contador = array.length - 1
    var indexFinal = index >= 0 ? contador - index : index;    
    return indexFinal;
  }

for(let i = 0 ; i < args.length; i++){
    cadena = cadena.concat(args[i]);
}
for( let i = 0; i <cadena.length; i++){
    item = cadena.charAt(i);    
    switch(item){
        case '(':
        case '[':
        case '{':            
            const object = {openchar: item, closed: false, type: item === '(' ? "parentesis" : item === '[' ? "corchetes":"llaves", index : i};
            chars.push(object);
            break;
        case ')':
        case ']':
        case '}':
            const index = findLastIndex(chars, item);
            chars[index].closed = true;
    }
}
let result = "";
chars.forEach( Element => { !Element.closed ? result+= `Error en ${Element.index+1} de la cadena ingresada, el signo ${Element.openchar} está abierto, pero no se cierra. \n` : ""})

console.log( result.length === 0 ? "Cadena Correcta" : result);


