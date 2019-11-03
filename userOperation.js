
 function arrayOperation (){

    let _arrayData=[];
    this.arrayMethod=function(userModel){
               _arrayData.push(userModel);
    }

    
    this.printMethod= function(){


        _arrayData
        .forEach((userModelobj1)=>{
            console.log(`${userModelobj1.firstName}${userModelobj1.lastName}`)
        });
    };

};

