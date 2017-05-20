import { Component } from '@angular/core';

import { Skill } from '../list/skill';
import { ListService } from '../list/list.service';

@Component({
    selector: 'statistic-form',
    templateUrl: './statistic-form.component.html',
    styleUrls: ['./statistic-form.component.scss']
})

export class StatisticFromComponent {

    constructor(private listService: ListService) {
    }

    savePlayer(skill: Skill) {
        if (skill) {
            this.listService.insertSkill(skill)
                .subscribe(
                    insertedSkill => this.list.push(insertedSkill),
                    error => console.log(error)
                );
        }
    }
}

