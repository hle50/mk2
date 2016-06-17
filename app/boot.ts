import {bootstrap}    from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {GlobalService} from './shared/global.service';
import {AppComponent} from './app.component';
import {provide} from '@angular/core';
import {ToastOptions} from "ng2-toastr/ng2-toastr";
let options = {
    autoDismiss: true,
    positionClass: 'toast-bottom-right',
};
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,GlobalService,  provide(ToastOptions, { useValue: new ToastOptions(options)})]);