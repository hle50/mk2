import {Component, OnInit, Input} from '@angular/core';


@Component({
    selector: 'product',
    templateUrl: 'app/product/product.template.html',

})
export class ProductComponent  {

    @Input() p;
}/**
 * Created by hoale on 6/16/2016.
 */
