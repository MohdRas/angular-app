import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space-pipe';

@NgModule({
  declarations: [ // components of this module
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe
  ],
  imports: [ // modules which does not belong to this module
    BrowserModule, // for application to work correctly in browser 
    FormsModule
  ],
  // bootstrap - self starting process loads and goes 
  // starting compoment
  // starting compoment should contain selector used in index.html file
  bootstrap: [AppComponent]
})
export class AppModule { }
