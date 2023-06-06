import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class MailService {
    httpOptions: any;
    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': '*/*' })
        };
    }

    sendEmail(user: any): Observable<any> {
        return this.http.post('http://localhost:8080/send', user, { ...this.httpOptions, responseType: 'text' })
    }
}