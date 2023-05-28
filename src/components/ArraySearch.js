//Linear

Array.prototype.ArraySearch=function(target){
    let boolval=false;
    this.map((ele)=>{
    
        if(ele==target){
            boolval=true;
        }
    })

    // arr1.forEach(element => {
    //     if(element===target){
    //         return element;
    //     }
    // });

    return boolval?target:-1;
    
}

export default Array.prototype.ArraySearch();