import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'skills-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
    filters: any;

    constructor() {
    }

    ngOnInit() {
        this.filters = [
            'Day',
            'Month',
            'Year'
        ];
    }
}
