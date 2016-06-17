import {Injectable} from '@angular/core'
@Injectable()
export class GlobalService {
    cart:any[] = [];


    setCart(item) {
        this.cart.push(item);
    }

    getCart() {
        return this.cart;
    }
    updateCart(cart){
        this.cart = cart;
    }
}
