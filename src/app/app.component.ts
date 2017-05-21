import { Component, OnInit } from '@angular/core';

import '../assets/styles/entry.scss';

import { SkillsService } from './shared/service/skills.service';

import { Skill } from './shared/model/skill';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    list: Skill[] = [];

    constructor(private skillsService: SkillsService) {
    }

    ngOnInit() {
        this.skillsService.getSkills()
            .subscribe(
                skills => this.list = skills,
                error => console.log(<any>error)
            );
    }
}
