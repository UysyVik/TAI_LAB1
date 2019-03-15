let result = ' x   ';

function buff(val){
  let buff = '';
  let pad = 4 - val;
    while( pad-- > 0 )
            buff += ' ';            
  return buff;
}

for (let i = 0; i < 11; i++) {

    for (let j = 0; j < 11; j++) {

        if(i == 0 && j > 0){
          result += '[' + j + ']' + buff((j+'').length+2);
        } 
        else if(j == 0 && i>0){
          result += '[' + i + ']';
        }
        else if(i>0 && j>0){
        result += buff((i*j+'').length ) + i*j;
        }
    }
    result += '\n'
}
console.log(result);