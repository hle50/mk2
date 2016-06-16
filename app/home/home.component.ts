
import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router-deprecated';
import {HomeService} from './home.service';

@Component({
    templateUrl: 'app/home/home.template.html',
    providers: [HomeService],
    directives: [RouterLink]
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