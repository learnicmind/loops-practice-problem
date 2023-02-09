var numbers = [34, 43, 23, 12, 34, 45, 199, 399];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}