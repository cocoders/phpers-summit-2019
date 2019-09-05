import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BeerMenuComponent } from './beer-menu/beer-menu.component';
import { BeersComponent } from './beer-menu/beers/beers.component';
import { FooterComponent } from './beer-menu/footer/footer.component';
import { HeaderComponent } from './beer-menu/header/header.component';
import { BeerComponent } from './beer-menu/beers/beer/beer.component';
import { PhotoNamePipe } from './beer-menu/beers/beer/photo-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BeerMenuComponent,
    BeersComponent,
    FooterComponent,
    HeaderComponent,
    BeerComponent,
    PhotoNamePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
