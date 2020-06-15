
class Config {//Config

    constructor(){//constructor
        this.SANDBOX = true;

        this.SANDBOX_EMAIL = "desenvolvimento@witcare.com.br";
        this.PRODUCTION_EMAIL = "desenvolvimento@witcare.com.br";

        this.SANDBOX_TOKEN = "BE25B897CD2849CABB5CDC483679BC6D";
        this.PRODUCTION_TOKEN = "1788a819-d815-4148-9ef6-f0a69b9f32039f981a7d4c1dbf6ab8edd70f8d7ef96e659f-045e-472b-9bf5-87215dfbd7e4";
        //https://ws.pagseguro.uol.com.br/?_ga=2.181645806.899554175.1592071835-1160429469.1592071835
        this.SANDBOX_SESSIONS = "https://ws.sandbox.pagseguro.uol.com.br/v2/sessions";
        this.PRODUCTION_SESSIONS = "https://ws.pagseguro.uol.com.br/v2/sessions";
    }//constructor

    getAuthentication(){//getAuthentication

        if( this.SANDBOX === true ){

            return {
                   email: this.SANDBOX_EMAIL,
                   token: this.SANDBOX_TOKEN,
                };

        }else{

            return {
                email: this.PRODUCTION_EMAIL,
                token: this.PRODUCTION_TOKEN,
             };

        }
        
    }//getAuthentication

     getUrlSessions(){
        return (this.SANDBOX === true) ? this.SANDBOX_SESSIONS : this.PRODUCTION_SESSIONS;
    }
    

}//Config

export default new Config();