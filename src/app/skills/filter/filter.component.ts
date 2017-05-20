import { Component, Input } from '@angular/core';

import { Skill } from "../../shared/model/skill";

import { ListService } from '../../shared/service/skills.service';

@Component({
    selector: 'skills-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
    @Input() list: Skill[];

    constructor(private listService: ListService) {
    }

    filterSkills(date: string) {
        this.listService.filteredSkills(Date.parse(date))
            .subscribe(
                skillsList => this.setSkillsToList(skillsList),
                error => console.log(error)
            );
    }

    private setSkillsToList(skillsList: Skill[]) {
        this.list.splice(0, this.list.length);
        this.list.push(...skillsList);
    }
}
