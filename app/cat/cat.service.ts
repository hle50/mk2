import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CatService {
    private _url = "http://catalogue.marketoi.com/index.php/api/Front/products/?go=";

    constructor(private _http: Http){
    }

    getSelection(cat){
        return this._http.get(this._url+cat)
            .map(res => res.json());
    }


}
