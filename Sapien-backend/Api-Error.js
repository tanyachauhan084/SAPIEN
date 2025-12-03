class ApiError extends Error{
    constructor(
        data,
        statuscode,
        message,
        errors=[],
        stack="",
    ){
        
this.data= data;
this.statuscode= statuscode;
this.message= message;
this.errors= errors;
this.success= statuscode>300;
if(stack){
    this.stack= stack;
}

else{
Error.captureStackTrace(this, this.constructor);
    }
    }

}