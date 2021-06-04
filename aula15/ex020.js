let num = [2,4,5,6,3]
num.push(1)

console.log(num.length)
console.log(num[1])
console.log(num)
console.log(num.sort())


for(let i=0; i<num.length;i++){
    console.log(num[i])
}

for(let i in num){
    console.log(num[i])
}


let num = [2,4,5,6,3]
let pos = num.indexOf(5)
console.log(pos)