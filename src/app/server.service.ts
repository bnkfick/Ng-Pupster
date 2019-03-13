import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService {
    constructor(private http: Http) {}
    storeDogs(breeds: any[]) {
        this.http.get('https://dog.ceo/api/breeds/list');
    }
}