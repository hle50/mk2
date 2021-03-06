import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'side-bar',
    template:`
    <div class="col-md-2 col-lg-2 home-left-column desktop-only">
    <aside class="sidebar site-block">


        <div class="sidebar-block" id="categoriesMenuLevel">
            <ul class="store-menu">
                <li class="father-departments-icon">
                    <span>DEPARTMENTS</span>
                </li>

                <!-- <li class="show-product">
                  <a class="department child {{catActive 'categoriesBrowsing'}}" href="/cat/{{_id}}">
                    <img src="{{icon_path}}" class="left-menu-image" width="20px" alt=""/>
                    <span class="left-menu-name">{{name}}</span>
                    <span> {{countProduct}} </span>
                  </a>
                </li> -->
                <li>
                    <a href="/cat/1" class="submenu" data-id="1">
                        <i class="fa fa-angle-right"></i>
                        <img src="http://catalo.marketoi.com/icones/food.png" class="left-menu-image"
                             width="20px" alt="">
                        <span class="left-menu-name">food</span>

                    </a>
                    <ul>


                        <li class="show-product">
                            <a class="department child" href="/cat/5">
                                <img src="http://catalo.marketoi.com/icones/snack.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">snack</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/10">
                                <img src="http://catalo.marketoi.com/icones/bakery.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">bakery</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/11">
                                <img src="http://catalo.marketoi.com/icones/meat.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">butcher</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/35">
                                <img src="http://catalo.marketoi.com/icones/gourmet.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">gourmet</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/36">
                                <img src="http://catalo.marketoi.com/icones/condiment.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">condiments</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li>
                            <a href="/cat/37" data-id="37">
                                <i class="fa fa-angle-right"></i>
                                <img src="http://catalo.marketoi.com/icones/basefood.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">base food</span>
                            </a>
                            <ul>

                                <li class="show-product">
                                    <a class="department child" href="/cat/41">
                                        <img src="" class="left-menu-image" width="20px" alt="">
                                        <span class="left-menu-name">instant noodles</span>
                                        <span></span>
                                    </a>
                                </li>

                            </ul>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/39">
                                <img src="" class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">creamery</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/40">
                                <img src="" class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">tea/coffee</span>
                                <span>  </span>
                            </a>
                        </li>


                    </ul>
                </li>

                <!-- <li class="show-product">
                  <a class="department child {{catActive 'categoriesBrowsing'}}" href="/cat/{{_id}}">
                    <img src="{{icon_path}}" class="left-menu-image" width="20px" alt=""/>
                    <span class="left-menu-name">{{name}}</span>
                    <span> {{countProduct}} </span>
                  </a>
                </li> -->
                <li>
                    <a href="/cat/2" class="submenu" data-id="2">
                        <i class="fa fa-angle-right"></i>
                        <img src="http://catalo.marketoi.com/icones/drink.png" class="left-menu-image"
                             width="20px" alt="">
                        <span class="left-menu-name">drinks</span>

                    </a>
                    <ul>


                        <li class="show-product">
                            <a class="department child" href="/cat/12">
                                <img src="http://catalo.marketoi.com/icones/soda.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">soda</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/13">
                                <img src="http://catalo.marketoi.com/icones/watermilk.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">water/milk</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/15">
                                <img src="http://catalo.marketoi.com/icones/beer.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">beer</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/16">
                                <img src="http://catalo.marketoi.com/icones/wine.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">wine</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/17">
                                <img src="http://catalo.marketoi.com/icones/spirit.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">spirits</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/38">
                                <img src="" class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">juice</span>
                                <span>  </span>
                            </a>
                        </li>


                    </ul>
                </li>

                <!-- <li class="show-product">
                  <a class="department child {{catActive 'categoriesBrowsing'}}" href="/cat/{{_id}}">
                    <img src="{{icon_path}}" class="left-menu-image" width="20px" alt=""/>
                    <span class="left-menu-name">{{name}}</span>
                    <span> {{countProduct}} </span>
                  </a>
                </li> -->
                <li>
                    <a href="/cat/3" class="submenu" data-id="3">
                        <i class="fa fa-angle-right"></i>
                        <img src="http://catalo.marketoi.com/icones/housecare.png"
                             class="left-menu-image" width="20px" alt="">
                        <span class="left-menu-name">home essentials</span>

                    </a>
                    <ul>


                        <li class="show-product">
                            <a class="department child" href="/cat/18">
                                <img src="http://catalo.marketoi.com/icones/bathroom.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">bathroom</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/19">
                                <img src="http://catalo.marketoi.com/icones/kitchen.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">kitchen</span>
                                <span>  </span>
                            </a>
                        </li>


                        <li class="show-product">
                            <a class="department child" href="/cat/27">
                                <img src="http://catalo.marketoi.com/icones/clothecare.png"
                                     class="left-menu-image" width="20px" alt="">
                                <span class="left-menu-name">clothes care</span>
                                <span>  </span>
                            </a>
                        </li>


                    </ul>
                </li>

            </ul>
        </div>

        <div class="sidebar-block">
            <ul class="store-menu shop-groups-menu">
                <li class="father-market-icon">
                    <span>SHOPS</span>
                </li>


                <li>
                    <a href="#" class="submenu" data-id="0">
                        <i class="fa fa-angle-right"></i>
                        <span class="left-menu-name">other</span>
                    </a>
                    <ul>

                        <li>
                            <a href="/shop/3" class="shop-name-select" data-shop-id="3">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201510/2468b5e71d36210013e7ac69f19e4bf3ca34faec_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Dolphy</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/17" class="shop-name-select" data-shop-id="17">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/67d065c2885541e1fab76df037e30f02_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Mc donalds</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/22" class="shop-name-select" data-shop-id="22">
                                <img class="left-menu-image" src="" width="80" alt="">
                                <span class="left-menu-name">Fruit shop</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/28" class="shop-name-select" data-shop-id="28">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201510/639a4b58b22df9acf91fe20ac4c38f3c6b08faf2_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Pizza Hut</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/33" class="shop-name-select" data-shop-id="33">
                                <img class="left-menu-image" src="" width="80" alt="">
                                <span class="left-menu-name">Villa Xuân Thủy Coffee</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/38" class="shop-name-select" data-shop-id="38">
                                <img class="left-menu-image" src="" width="80" alt="">
                                <span class="left-menu-name">Charcoal Shop</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/39" class="shop-name-select" data-shop-id="39">
                                <img class="left-menu-image" src="" width="80" alt="">
                                <span class="left-menu-name">Charcoal Shop</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/41" class="shop-name-select" data-shop-id="41">
                                <img class="left-menu-image" src="" width="80" alt="">
                                <span class="left-menu-name">Ice Shop</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/42" class="shop-name-select" data-shop-id="42">
                                <img class="left-menu-image" src="" width="80" alt="">
                                <span class="left-menu-name">Ice Shop</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/47" class="shop-name-select" data-shop-id="47">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201510/09a4933e4466ccdd1fa06d5efa7e879936c8a201_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Burger King</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/55" class="shop-name-select" data-shop-id="55">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/a5335b33f53112803f6eab9b1185ac8c_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Mon hue</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/65" class="shop-name-select" data-shop-id="65">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/db4e17cc17eca7cfad9364fd7a3c021d_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Zakka Mart</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/74" class="shop-name-select" data-shop-id="74">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/848de9f5a4ea9e6fe387ec29cb00feb9_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Khai Nguyen Coffee House</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/75" class="shop-name-select" data-shop-id="75">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/0b34ad4bf0a87359379e33a3f6856e8b_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Popeyes</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/81" class="shop-name-select" data-shop-id="81">
                                <img class="left-menu-image"
                                     src="http://104.199.130.119/uploads/shops_img/201512/1b6f2ffb8bbc4ff94fe09e344b6712dab794d532.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Sarpinos's Pizzeria</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/82" class="shop-name-select" data-shop-id="82">
                                <img class="left-menu-image"
                                     src="http://104.199.130.119/uploads/shops_img/201512/04c838c610c460903a5a363f1de7a4cd61440d8b.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Sandwhich Club</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/83" class="shop-name-select" data-shop-id="83">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/ab1f90c0f81bdf61522ab9825008945b_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Tay Ho</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/86" class="shop-name-select" data-shop-id="86">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/00e53d55b68292df7d6aadf7125df3c8f6512855_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Pop Fries</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/88" class="shop-name-select" data-shop-id="88">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/4981810306947904cb43ab97821a64baed263543_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">The North End Deli</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/89" class="shop-name-select" data-shop-id="89">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/7930e7099caa49c568ace490d5b5c7a6cc09e74b_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Tigon Flower</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/91" class="shop-name-select" data-shop-id="91">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/be323df1e3be20623174155fa594d0ae3428a251_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Coop Mart</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/95" class="shop-name-select" data-shop-id="95">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201602/707bb406697b8c84eab299dd4e2c9318761bd1e2_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Wine Embassy</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/97" class="shop-name-select" data-shop-id="97">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201602/95bd4f59d0269292da7fafd32d722433f47a7d4d_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Vins Descombe</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/100" class="shop-name-select" data-shop-id="100">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201603/471ea4e9d4f35e981d25f741382aceef2c82e4e1_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">VP Seafood</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/101" class="shop-name-select" data-shop-id="101">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201603/063e5918470198c462a310e6de54260f2baa1646_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Meatworks</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/102" class="shop-name-select" data-shop-id="102">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201603/a3bdd8acceebb5688445383b77b766575092595e_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Metro</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/103" class="shop-name-select" data-shop-id="103">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201603/decf5305810ed1ddeb3dcf5fb19fe2d28d044d00_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">JuicElixir</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/122" class="shop-name-select" data-shop-id="122">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201605/3bdf9008690ec85bae7478c4c204ba7cc41531d8_thumb.jpg"
                                     width="80" alt="">
                                <span class="left-menu-name">Hong Hanh Restaurant</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/133" class="shop-name-select" data-shop-id="133">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201605/7562d8cc6bb70cf786fed78f19440887d1012cb4_thumb.jpg"
                                     width="80" alt="">
                                <span class="left-menu-name">Warehouse Coffee &amp; Milk Shake</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/134" class="shop-name-select" data-shop-id="134">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201605/de672c381e363da39be91dab4865a3e35c85b182_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Hoang Long Restaurant</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/137" class="shop-name-select" data-shop-id="137">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201605/242c9810fdbdcefa7d2ab5b741aa87ac3f242209_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">365 Degrees Pizza</span>
                            </a>
                        </li>

                    </ul>
                </li>


                <li>
                    <a href="#" class="submenu" data-id="1">
                        <i class="fa fa-angle-right"></i>
                        <span class="left-menu-name">convenient</span>
                    </a>
                    <ul>

                        <li>
                            <a href="/shop/1" class="shop-name-select" data-shop-id="1">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201510/287eb140fbeec9ee5f09af197721e95546358555_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Family Mart</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/4" class="shop-name-select" data-shop-id="4">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201510/287eb140fbeec9ee5f09af197721e95546358555_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Family Mart</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/7" class="shop-name-select" data-shop-id="7">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201510/3465b377944024dd729d1e3402a6c7c80420a3a4_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">An Phu Market</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/19" class="shop-name-select" data-shop-id="19">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201510/e208a8b1154a5f4c449a14a6dbffd429d4117541_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Circle K</span>
                            </a>
                        </li>

                    </ul>
                </li>


                <li>
                    <a href="#" class="submenu" data-id="3">
                        <i class="fa fa-angle-right"></i>
                        <span class="left-menu-name">organic</span>
                    </a>
                    <ul>

                        <li>
                            <a href="/shop/6" class="shop-name-select" data-shop-id="6">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/fcb843c82e2b274ba92ab48b0fd7896f_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">organik and co</span>
                            </a>
                        </li>

                    </ul>
                </li>


                <li>
                    <a href="#" class="submenu" data-id="4">
                        <i class="fa fa-angle-right"></i>
                        <span class="left-menu-name">bakery</span>
                    </a>
                    <ul>

                        <li>
                            <a href="/shop/2" class="shop-name-select" data-shop-id="2">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201601/e752992b11426ec061752366f58d2a08_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Voelker</span>
                            </a>
                        </li>

                        <li>
                            <a href="/shop/50" class="shop-name-select" data-shop-id="50">
                                <img class="left-menu-image"
                                     src="http://catalogue.marketoi.com/uploads/shops_img/201605/306066f3ee6db84460c1b34e1b391c0be8254ebb_thumb.png"
                                     width="80" alt="">
                                <span class="left-menu-name">Dunkin Donuts</span>
                            </a>
                        </li>

                    </ul>
                </li>


            </ul>
        </div>
    </aside>
</div>
    `
    //templateUrl: 'app/sidebar/sidebar.template.html',

})
export class SideBarComponent  {

}