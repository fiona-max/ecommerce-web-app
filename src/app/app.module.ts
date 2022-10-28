import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchNavBarComponent } from './components/search-nav-bar/search-nav-bar.component';
import { MenuNavBarComponent } from './components/menu-nav-bar/menu-nav-bar.component';
import { CarouselSectionComponent } from './pages/carousel-section/carousel-section.component';
import { ProductSectionComponent } from './pages/product-section/product-section.component';
import { FooterSectionComponent } from './pages/footer-section/footer-section.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component'

const routes: Routes = [
  { path: '' , component: HomeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    SearchNavBarComponent,
    MenuNavBarComponent,
    CarouselSectionComponent,
    ProductSectionComponent,
    FooterSectionComponent,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
