let obj = { name: 'zhufeng', age: 10 };
let result = JSON.stringify(obj, replacer, 8);
function replacer(key, value) {
    console.log(key, value);
    if(key == 'age') return value *2;
    return value;
}
console.log(result);