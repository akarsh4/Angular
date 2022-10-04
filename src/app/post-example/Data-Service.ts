import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { postData } from "./postdataObj";


@Injectable({
    providedIn: 'root'
})

export class DataService{
    postUrl: string= "https://jsonplaceholder.typicode.com/posts";
    
    
    constructor (private httpClient: HttpClient) {}
addPost(postD: postData){
    return this.httpClient.post(this.postUrl, postD);
}

}
