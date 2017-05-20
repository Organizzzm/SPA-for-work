import { Injectable } from '@angular/core';

import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Skill } from './skill';

@Injectable()
export class ListService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private skillsUrl = '/skills';

    constructor(private http: Http) {}

    getSkills(): Observable<Skill[]> {
        return this.http.get(this.skillsUrl)
            .map(res => res.json() as Skill[])
            .catch(this.handleError);
    }

    insertSkill(skill: Skill): Observable<Skill> {
        return this.http.post(this.skillsUrl, JSON.stringify(skill), { headers: this.headers })
            .map(response => response.json() as Skill)
            .catch(this.handleError);
    }

    private handleError(response: Response): Observable<any> {
        let errorMessage = `${response.status} - ${response.statusText}`;
        return Observable.throw(errorMessage);
    }
}