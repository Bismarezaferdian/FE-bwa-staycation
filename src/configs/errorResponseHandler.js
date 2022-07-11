function errorResponseHandler(error){
    if(error){
        let message;
        if(error.respons){
            if(error.respons.status=== 500 ) message = "ups someting went wong !"
            else{
                message =error.respons.message;
                console.log(message);
                return Promise.reject(error)
            }
        }
    }
}
export default errorResponseHandler;