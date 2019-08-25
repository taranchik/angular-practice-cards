import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component'
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardComponent } from './card/card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {CartService} from '../app/cart.service';
import {CardService} from '../app/card.service';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [CartService, CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
