let str = "hello"

let obj = {}
for(s in str){
    obj[s] = (obj[s] || 0) + 1
}
console.log("obj", obj);


// out put {h:1, e:1, l:2, l:2, o:1}