const dopromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        
        //resolve([1,2,3])
        reject("rejected")

    }, 2000);
})

dopromise.then( (result)=>{
    console.log("done"+result)
} ).catch((error)=>{
    console.log(error)
})