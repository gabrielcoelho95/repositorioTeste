function crescente(){
    let numbers = [];
    for(let i = 0; i < 10; i++){
        if(i % 2 === 0){
            numbers.push(i);
        }
    }
    return numbers;
}
console.log(crescente())
