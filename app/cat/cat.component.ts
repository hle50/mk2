
import {Component, OnInit} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {CatService} from './cat.service';
import {ProductComponent} from '../product/product.component';

@Component({
    templateUrl: 'app/cat/cat.template.html',
    providers:[CatService],
    directives:[ProductComponent]

})
export class CatComponent implements  OnInit {
    data;
    constructor(
        private _router: Router,
        private _routeParams: RouteParams,
        private _catService: CatService
    ){
        
    }
    ngOnInit(){
        var cat = this._routeParams.get("cat");
        this._catService.getSelection(cat)
            .subscribe(
                data => this.data = data.result
               );
    }

}