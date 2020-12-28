const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();
promise.then((result)=>{
    console.log(`The result is: ${result}`);
})

const question = `Will the weather be nice today?`;
const answer = tell();
answer.then((val)=>{
    console.log(question)
    console.log(val);
}).catch(console.log);  //val is the value that's being returned from answer, which is the tell function 
//with the question parameter

console.log(promise); //the terminal will display this first, then do all the async queue
