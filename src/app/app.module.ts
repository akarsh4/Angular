import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './MyComponent';
import { ForEachComponent } from './for-each/for-each.component';
import { ImageDisplay } from './ImageDisplay';
import { IfExampleComponent } from './if-example/if-example.component';
import { FormsModule } from '@angular/forms';
import {CustomDirective } from './CustomDirective'
import { Product } from './product';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SortPipe } from './sort.pipe';
import { MyServiceComponent } from './my-service/my-service.component';
import { EmplyeeDetailsComponent } from './emplyee-details/emplyee-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MyService } from './MyService';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { PostExampleComponent } from './post-example/post-example.component';
import { MyFormComponent } from './my-form/my-form.component';
import { MyReactiveComponent } from './my-reactive/my-reactive.component';
import { ProductsComponent } from './products/products.component';




@NgModule({
  declarations: [
    AppComponent, MyComponent, ImageDisplay,ForEachComponent, IfExampleComponent, CustomDirective, Product, PipeExampleComponent, SortPipe, MyServiceComponent, EmplyeeDetailsComponent, ProductsDetailsComponent, PostExampleComponent, MyFormComponent,  MyReactiveComponent, ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
