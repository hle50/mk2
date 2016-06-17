import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../shared/global.service";


@Component({
    selector: 'cart',
    templateUrl: 'app/cart/cart.template.html',

})
export class CartComponent  {
    test;
    constructor(private share: GlobalService){
        this.test = this.share;
    }
}/**
 * Created by hoale on 6/16/2016.
 */
