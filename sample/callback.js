const myfunction = (callback) =>{

setTimeout(() => {
    
callback(undefined,[1,4,7])

}, 2000);

} 


myfunction( (error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
} )