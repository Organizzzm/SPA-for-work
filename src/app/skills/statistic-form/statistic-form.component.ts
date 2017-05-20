import { Component, Input, ViewChild } from '@angular/core';

import { ListService } from '../../shared/service/skills.service';

import { Skill } from "../../shared/model/skill";

@Component({
    selector: 'statistic-form',
    templateUrl: './statistic-form.component.html',
    styleUrls: ['./statistic-form.component.scss']
})

export class StatisticFromComponent {
    @Input() list: Skill[];
    @ViewChild('technologyForm') tForm: any;

    constructor(private listService: ListService) {
    }

    saveSkill(skill: Skill) {
        skill.date = new Date(skill.date).getTime();

        this.listService.insertSkill(skill)
            .subscribe(
                insertedSkill => {
                    this.list.push(insertedSkill);
                    this.tForm.reset();
                },
                error => console.log(error)
            );
    }
}

