import {Injectable} from '@angular/core';
import * as _ from 'lodash';
@Injectable()
export class GlobalService {
    cart:any[] = [];


    setCart(item) {
        this.cart.push(item);
    }

    getCart() {
        return this.cart;
    }

    updateCart(cart) {
        this.cart = cart;
    }

    totalPrice() {
        if (!this.cart.length) {
            return 0;
        }
        else {
           return _.sumBy(this.cart, function (o) {
                return (o.price * o.quantity);
            })
        }
    }
}
