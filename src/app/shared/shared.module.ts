import { NgModule } from '@angular/core';

import { PieChartDirective } from './pie-chart.directive';
import {
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSliderModule,
    MdButtonModule,
    MdCardModule,
    MdIconModule,
    MdSelectModule,
    MdListModule
} from '@angular/material';

@NgModule({
    imports: [
        MdInputModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSliderModule,
        MdButtonModule,
        MdCardModule,
        MdIconModule,
        MdSelectModule,
        MdListModule
    ],
    exports: [
        MdInputModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdSliderModule,
        MdButtonModule,
        MdCardModule,
        MdIconModule,
        MdSelectModule,
        MdListModule,
        PieChartDirective
    ],
    declarations: [
        PieChartDirective
    ],
    providers: [
    ],
})

export class SharedModule {
}
