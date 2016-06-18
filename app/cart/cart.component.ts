import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../shared/global.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Message} from '../shared/message'
@Component({
    selector: 'cart',
    templateUrl: 'app/cart/cart.template.html',
    providers:[ToastsManager, Message]

})
export class CartComponent {

    constructor(private share:GlobalService,private toastr: ToastsManager,private message: Message) {

    }

    emptyCart() {
        this.share.updateCart([]);
        this.toastr.success(this.message.emptyCart, 'Success!');
    }

    removeItem(item) {

        var current = _.filter(this.share.getCart(), function (obj) {
            return obj.id != item.id;
        });
        this.share.updateCart(current);
        this.toastr.success(this.message.itemRemoved, 'Success!');
    }

    up(item) {
        item.quantity += 1;
        this.toastr.success(this.message.cartUpdate, 'Success!');

    }

    down(item) {
        if (item.quantity == 1)
            return;
        item.quantity -= 1;
        this.toastr.success(this.message.cartUpdate, 'Success!');

    }


}