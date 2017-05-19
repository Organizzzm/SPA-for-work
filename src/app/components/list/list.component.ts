import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'skills-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {
    list: any;

    constructor() {
    }

    ngOnInit() {
        this.list = [
            {
                name: 'JavaScript',
                date: '3325325',
                percent: '10'
            },
            {
                name: 'JavaScript',
                date: '3325325',
                percent: '80'
            },
            {
                name: 'JavaScript',
                date: '3325325',
                percent: '100'
            },
            {
                name: 'JavaScript',
                date: '3325325',
                percent: '35'
            },
            {
                name: 'JavaScript',
                date: '3325325',
                percent: '19'
            },
        ];
    }
}