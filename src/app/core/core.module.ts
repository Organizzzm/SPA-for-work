import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule }       from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    declarations: [],
    exports: [
        BrowserAnimationsModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
})

export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
