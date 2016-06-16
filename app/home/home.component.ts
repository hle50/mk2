
import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';
import {HomeService} from './home.service';
import {ProductComponent} from '../product/product.component'
import {SpinnerComponent} from '../shared/spinner.component'

@Component({
    templateUrl: 'app/home/home.template.html',
    providers: [HomeService],
    directives: [RouterLink, ProductComponent, SpinnerComponent]
})
export class HomeComponent implements OnInit {
    data;
    
    constructor(private _service: HomeService){
    }

    ngOnInit(){
        this._service.getSelection()
            .subscribe(data => this.data = data.result);
    }
    
}