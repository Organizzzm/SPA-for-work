import { Component, Input } from '@angular/core';

import { Skill } from '../../shared/model/skill';

import { SkillsService } from '../../shared/service/skills.service';

@Component({
    selector: 'skills-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.scss']
})

export class ListComponent {
    @Input() list: Skill[];

    constructor(private skillsService: SkillsService) {
    }

    removeSkill(skill: Skill) {
        this.skillsService.deleteSkill(skill)
            .subscribe(
                () => this.removeSkillFromList(skill),
                error => console.log(error)
            );
    }

    private removeSkillFromList(skill: Skill) {
        const index = this.list.indexOf(skill, 0);

        if (index > -1) {
            this.list.splice(index, 1);
        }
    }
}
