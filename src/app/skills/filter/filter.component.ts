import { Component, Input } from '@angular/core';

import { Skill } from '../../shared/model/skill';

import { SkillsService } from '../../shared/service/skills.service';

@Component({
    selector: 'skills-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})

export class FilterComponent {
    @Input() list: Skill[];

    date: string;

    constructor(private skillsService: SkillsService) {
    }

    filterSkills(date: string) {
        this.skillsService.filteredSkills(Date.parse(date))
            .subscribe(
                skillsList => this.setSkillsToList(skillsList),
                error => console.log(error)
            );
    }

    resetFilter() {
        this.date = '';
        this.skillsService.getSkills()
            .subscribe(
                skillsList => this.setSkillsToList(skillsList),
                error => console.log(<any>error)
            );
    }

    private setSkillsToList(skillsList: Skill[]) {
        this.list.splice(0, this.list.length);
        this.list.push(...skillsList);
    }
}
