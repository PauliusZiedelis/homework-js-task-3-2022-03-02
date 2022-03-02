function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

//task1
bitGirls.unshift('Nausėda');
console.log(bitGirls);

//task2
bitCats = [];
cats.forEach(cat => {
    let weight=rand(0, 1);
    (weight === 0) ? weight = 'storas' : weight = 'normalus';
    bitCats.push([cat, weight]);
});
console.log(bitCats);

//task3
function task3(){
    let fatCat=0;
    let normalCat=0;
    bitCats.forEach(cat => {
        (cat[1] === 'storas') ? fatCat++ : normalCat++;
        // if(cat[1] === 'normalus'){
        //     normalCat++;
        // }else{
        //     fatCat++;
        // }
    });
    console.log(`Storų katčių yra: ${fatCat}, normalių kačių ${normalCat}`)
}
task3();

//task4
bitCats.sort(function(a, b){return a[0][1].charCodeAt(0) - b[0][1].charCodeAt(0)});
console.log(bitCats);
// bitCats.sort(function (a, b) {
//     if (a[0][1].charCodeAt(0) < b[0][1].charCodeAt(0)) {
//         return -1;
//     }
//     if (a[0][1].charCodeAt(0) > b[0][1].charCodeAt(0)) {
//         return 1;
//     }
//     return 0;
// });

//task5
const happyCats = [];
for(let i = 0; i < bitGirls.length; i++){
    (i === 0) ? happyCats.push([bitGirls[i], 'Barsukas']) : happyCats.push([bitGirls[i], bitCats[i-1][0]]);
}
console.log(happyCats);