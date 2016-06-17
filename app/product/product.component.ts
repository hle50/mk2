import {Component, OnInit, Input} from '@angular/core';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
@Component({
    selector: 'product',
    templateUrl: 'app/product/product.template.html',
    directives: [MODAL_DIRECTVES],
    viewProviders:[BS_VIEW_PROVIDERS],

})
export class ProductComponent  {

    @Input() p;
}/**
 * Created by hoale on 6/16/2016.
 */
