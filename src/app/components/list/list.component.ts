import { Component, OnInit } from '@angular/core';

import { ListService } from './list.service';

import { Skill } from './skill';

@Component({
    selector: 'skills-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})
export class ListComponent implements OnInit {
    list: Skill[];

    constructor(private listService: ListService) {
    }

    ngOnInit() {
        this.listService.getSkills()
            .subscribe(
                skills => {
                    this.list = skills;
                    console.log(skills);
                },
                error => console.log(<any>error)
            );
    }
}
