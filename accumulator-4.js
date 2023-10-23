const arr = ['arsen','ali','iznaur','islam','magomed']
let acumulator = []
for(let i = 0; i < arr.length; i++){
    if(arr[i][0] == 'a'){
        acumulator.push(arr[i])
    }
}
console.log(acumulator);