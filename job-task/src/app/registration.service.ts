import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()

export class registerService {

constructor(
    private http : HttpClient
){}

    registration(getDetails){
        return this.http.post("http://localhost:3001/v1/user/signup",getDetails);
    }


}