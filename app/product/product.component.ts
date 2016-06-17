import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {MODAL_DIRECTVES, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import {GlobalService} from "../shared/global.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as _ from 'lodash';
@Component({
    selector: 'product',
    templateUrl: 'app/product/product.template.html',
    directives: [MODAL_DIRECTVES],
    viewProviders: [BS_VIEW_PROVIDERS,ToastsManager],

})
export class ProductComponent {
    quantity = 1;
    @Input() p;
    @ViewChild('lgModal') bgModel;

    constructor(private share:GlobalService,private toastr: ToastsManager) {

    }

    onShow() {
        this.quantity = 1;
    }

    addToCart() {
        let id = this.p.id;
        let currentCart = this.share.getCart();

        var existed = _.find(currentCart, function (obj) {
            return obj.id == id;
        });

        if (existed) {
            existed.quantity +=  _.cloneDeep(this.quantity);
            this.share.updateCart(currentCart);
        }
        else {
            let obj = {
                id: this.p.id,
                quantity: _.cloneDeep(this.quantity),
                price: this.p.price,
                product: this.p
            };

            this.share.setCart(obj);
        }

        this.bgModel.hide();
        this.toastr.success(this.share.getMessage().cartUpdate, 'Success!');

    }


}
/**
 * Created by hoale on 6/16/2016.
 */
