
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, ROUTES } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';

import { FruitsJsonComponent } from './fruits-json/fruits-json.component';
import { JsonexampleComponent } from './jsonexample/jsonexample.component';
import { EditcomponetComponent } from './editcomponet/editcomponet.component';
import { ExamplesComponent } from './examples/examples.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MembersComponent,
    FruitsJsonComponent,
    JsonexampleComponent,
    EditcomponetComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '\member',
        component: MembersComponent
      },
      {
        path: '\product',
        component: ProductComponent
      },
      {
        path: '\product/:id/edit',
        component: EditcomponetComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
