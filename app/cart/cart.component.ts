import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../shared/global.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {Message} from '../shared/message'
@Component({
    selector: 'cart',
    template:`
    <div class="col-md-3 col-lg-3 cart-quick-view">
    <div id="cartQuickView">
        <div class="col-md-12 cart-total">
            <div class="col-md-7">
                <h3>{{share.totalPrice()}} VND</h3>
                <span style="display: block">{{share.getCart().length}} ITEM(S)</span>
                <span style="display: block">Service</span>
                <span> VND</span>
            </div>
            <div class="col-md-5">

          <span class="mini-cart-button">
          <button (click)="emptyCart()" class="btn btn-sm btn-block btn-default">EMPTY</button>
        </span>
        <span class="mini-cart-button">
          <button class="btn btn-sm btn-block btn-default">VIEW</button>
        </span>
        <span class="mini-cart-button">
          <button class="btn btn-sm btn-block btn-success">CHECKOUT</button>
        </span>

            </div>
        </div>
        <!--<div class="cart-total"><h3>{{CartTotal}} vnd</h3></div>-->
        <!--<div class="cart-count">{{CartCount}} <span>item(s)</span></div>-->
        <!--<div class="cart-button">-->

        <!--</div>-->
        <div class="col-md-12 cart-product-list">
            <div class="table-responsive">
                <table class="table table-vcenter table-striped">
                    <tbody>

                    <tr *ngFor="let item of share.getCart(); let i = index">
                        <td>
                            <div class="product-information">
                                <div class="product-image"></div>
                                <div>
                                    <span class="block-view">{{item.product.name}}</span>
                                    <span class="block-view">{{item.product.shops_label}}</span>
                                    <span class="block-view"></span>
                                </div>
                            </div>
                            <div class="product-action">
                                <button (click)="down(item)" class="btn btn-xs btn-danger decreaseItem" title="Remove">
                                    <i class="fa fa-minus"></i>
                                </button>
                                {{item.quantity}}
                              <span>
                                <button (click)="up(item)" class="btn btn-xs btn-success increaseItem" title="Add">
                                    <i class="fa fa-plus"></i>
                                </button>
                              </span>
                                <span class="product-price">{{item.product.price}} VND</span>
                              <span class="product-remove">
                                <button  (click)="removeItem(item)" class="btn btn-xs btn-danger removeItemCart">
                                    <i class="fa fa-remove"></i>
                                </button>
                              </span>
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
    `,
    //templateUrl: 'app/cart/cart.template.html',
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