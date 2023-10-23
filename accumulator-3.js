const arr = ['apple','mushnapple','pinapple','error','axe','one']
let acumulator = []
for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 3){
        acumulator.push(arr[i])
    }
}
console.log(acumulator)