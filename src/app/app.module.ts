import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { SmallCardsComponent } from './small-cards/small-cards.component';
import { BigCardsComponent } from './big-cards/big-cards.component';
import { FAQComponent } from './faq/faq.component';
import { BlogPartsComponent } from './blog-parts/blog-parts.component';
import { BlogComponent } from './blog/blog.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { PagesComponent } from './pages/pages.component';
import { PreventionComponent } from './prevention/prevention.component';
import { GutterComponent } from './gutter/gutter.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    SmallCardsComponent,
    BigCardsComponent,
    FAQComponent,
    BlogPartsComponent,
    BlogComponent,
    PrecautionsComponent,
    PagesComponent,
    PreventionComponent,
    GutterComponent,
    ShopComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
