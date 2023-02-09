// for (var i = 1; i < 20; i++){
//     console.log(i);
//     if (i > 10){
//         break;
//     }
// }

// var roasGiven = 0;
// while(roasGiven < 10){
//     console.log('amake roast den');
//     roasGiven++;
//     if(roasGiven > 5){
//         break;
//     }
// }

// var tables = ['mouse', 'watch', 'purse', 'keyboard', 'lipgel'];

// for(var i = 0; i < tables.length; i++){
//     var table = tables[i];
//     if (table == 'purse'){
//         break
//     }
//     console.log(table);
// }
var numbers = [34, 43, 23, 12, 34, 45, 199, 399];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}