// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    let arr = [];
    for(i=0; i < l.length; i++) {
        if(typeof l[i] === 'number') {
            arr.push(l[i]);
        }
    }
    return arr;
}
