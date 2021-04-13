
const sum = (num1,num2,cb) =>{

    setTimeout(()=>{

        let sum = num1 + num2

        cb(sum)

    },2000)

}

sum(1,2,(sum) =>{
    console.log(sum)
})