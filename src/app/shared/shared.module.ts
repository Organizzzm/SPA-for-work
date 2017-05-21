import { NgModule } from '@angular/core';

import { PieChartDirective } from './directive/pie-chart.directive';

import { SkillsService } from './service/skills.service';

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
        SkillsService
    ],
})

export class SharedModule {
}
