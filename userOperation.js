
 function arrayOperation (user){

    let _arrayData=[];


    this.arrayMethod=function(userModel){
               _arrayData.push(userModel);
    }


    this.printMethod= function(userModel){
    _arrayData
        .forEach((userModel)=>{
            console.log(`${userModelobj1.firstName}${userModelobj1.lastName}`)
        });
    };
 
};