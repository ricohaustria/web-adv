import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(public client: HttpClient) {}

  getSkills() {
    return this.client.get<Skill[]>(environment.apiurl);
  }
}
