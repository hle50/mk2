import {Component,ViewContainerRef} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {NavComponent} from './nav/nav.component';
import {SearchComponent} from './search/search.component';
import {SideBarComponent} from './sidebar/sidebar.component';
import {CartComponent} from './cart/cart.component';
import {HomeComponent} from './home/home.component';


@RouteConfig([
	 { path: '/', name: 'Home', component: HomeComponent },
	// { path: '/users', name: 'Users', component: UsersComponent },
	// { path: '/users/:id', name: 'EditUser', component: UserFormComponent },
	// { path: '/users/new', name: 'NewUser', component: UserFormComponent },
    // { path: '/posts', name: 'Posts', component: PostsComponent },
    // { path: '/not-found', name: 'NotFound', component: NotFoundComponent },
	// { path: '/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    templateUrl:'./app/app.template.html',
    directives: [NavComponent,SearchComponent,SideBarComponent,CartComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { 
    viewContainerRef;
      public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
    
}