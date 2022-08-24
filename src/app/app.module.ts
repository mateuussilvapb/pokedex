import { PokeApiService } from './services/poke-api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Modules
import { PagesModule } from './pages/pages.module';

//Components

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    PagesModule, 
    HttpClientModule],
  providers: [PokeApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
