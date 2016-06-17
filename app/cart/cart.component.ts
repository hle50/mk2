import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../shared/global.service";


@Component({
    selector: 'cart',
    templateUrl: 'app/cart/cart.template.html',

})
export class CartComponent  {

    constructor(private share: GlobalService){

    }
    emptyCart(){
        this.share.updateCart([]);
    }


}