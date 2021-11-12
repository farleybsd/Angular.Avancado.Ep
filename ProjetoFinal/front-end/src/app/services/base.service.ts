import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { LocalStorageUtils } from "../utils/localstorage";

export abstract class BaseService {

    public localStorage = new  LocalStorageUtils();

    protected urlServiceV1 = "https://localhost:5001/api/v1/";

    protected ObterHeaderJson(){
        return{
            headers: new HttpHeaders({
                'Content-Type' : 'application/json'
            })
        }
    }

    protected extractData(response : any){
        return response.data || {};
    }

    protected serviceError(response : Response | any){

        let customError : string[] = [];

        if(response instanceof HttpErrorResponse){
            if(response.statusText === 'Unknown Error'){
                customError.push("Ocorreu um Erro Desconhecido")
                response.error.errors = customError;
            }
        }

        console.log(response)
        return throwError(response);
    }
}