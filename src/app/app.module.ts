import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatureFlagGuard, FeatureFlagService } from './routes/feature.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FeatureFlagGuard,
    FeatureFlagService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
