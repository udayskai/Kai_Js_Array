
 function arrayOperation (user){

    let _arrayData=[];

     this.extra= function (){
          _arrayData.filter("uday")
     }


     
    this.arrayMethod=function(userModel){
               _arrayData.push(userModel);
    }


    this.printMethod= function(){
    _arrayData
        .forEach((userModel)=>{
            console.log(`${userModelobj1.firstName}${userModelobj1.lastName}`)
        });
    };
 
  
};