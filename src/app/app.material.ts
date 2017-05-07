import { NgModule } from '@angular/core';
import 'hammerjs';
import { MdButtonModule, MdCardModule, MdInputModule,
         MdIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    exports: [
        BrowserAnimationsModule, FlexLayoutModule,
        MdButtonModule, MdCardModule, MdInputModule,
        MdIconModule
    ]
})
export class Material {
}
