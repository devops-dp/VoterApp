import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StickyHeaderComponent } from './sticky-header/sticky-header.component';

import { Material } from './app.material';
import { AddLinkComponent } from './add-link/add-link.component';
import { FluidUiComponent } from './fluid-ui/fluid-ui.component';
import { LinkComponent } from './link/link.component';
import { LinkListComponent } from './link-list/link-list.component';
import { AppLoader } from './app-loader/app-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    StickyHeaderComponent,
    AddLinkComponent,
    FluidUiComponent,
    LinkComponent,
    LinkListComponent,
    AppLoader
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
