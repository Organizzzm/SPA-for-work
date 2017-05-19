import { Component } from '@angular/core';

@Component({
    selector: 'statistic-form',
    templateUrl: './statistic-form.component.html',
    styleUrls: ['./statistic-form.component.scss']
})

export class StatisticFromComponent {

    constructor() {
    }

    addTechnology(value: any) {
        console.log(value);
    }
}

