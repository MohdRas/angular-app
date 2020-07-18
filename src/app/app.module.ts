import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [ // components of this module
    AppComponent,
    ProductListComponent
  ],
  imports: [ // modules which does not belong to this module
    BrowserModule // for application to work correctly in browser 
  ],
  // bootstrap - self starting process loads and goes 
  // starting compoment
  // starting compoment should contain selector used in index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
