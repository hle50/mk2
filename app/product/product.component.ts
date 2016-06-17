import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {GlobalService} from "../shared/global.service";

@Component({
    selector: 'product',
    templateUrl: 'app/product/product.template.html',
    directives: [MODAL_DIRECTVES],
    viewProviders: [BS_VIEW_PROVIDERS],

})
export class ProductComponent {
    numeral = numeral;
    quantity = 1;
    @Input() p;
    @ViewChild('lgModal') bgModel;

    constructor(private share:GlobalService) {

    }

    addToCart() {
        let id = this.p.id;
        let currentCart = this.share.getCart();

        var existed = _.find(currentCart, function (obj) {
            return obj.id == id;
        });

        if (existed) {
            existed.quantity += this.quantity;
            this.share.updateCart(currentCart);
        }
        else {
            let obj = {
                id: this.p.id,
                quantity: this.quantity,
                price: this.p.price,
                product: this.p
            };

            this.share.setCart(obj);
        }


        console.log(this.share.getCart());
        this.bgModel.hide();

    }
}
/**
 * Created by hoale on 6/16/2016.
 */
