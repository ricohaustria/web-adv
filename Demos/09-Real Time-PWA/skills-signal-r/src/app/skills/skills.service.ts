import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Skill } from './skills.model';
import { HttpClient } from '@angular/common/http';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  private skills: BehaviorSubject<Skill[]> = new BehaviorSubject<Skill[]>([]);
  private hubConnetion: signalR.HubConnection;

  constructor(private httpClient: HttpClient) {
    this.initSkills();
  }

  private initSkills() {
    this.httpClient
      .get<Skill[]>(`${environment.skillsapi}skills`)
      .subscribe((data) => {
        this.skills.next(data);
        this.initSocketConnection();
        console.log('socket connection initialized');
      });
  }

  private initSocketConnection() {
    this.hubConnetion = new signalR.HubConnectionBuilder()
      .withUrl(environment.skillshub)
      .build();

    this.hubConnetion.on('skillsChanged', (data: Skill[]) => {
      console.log('received from signal-r hub', data);
      this.skills.next(data);
    });

    this.hubConnetion.start();
  }

  getSkills(): Observable<Skill[]> {
    return this.skills;
  }

  addSkill(item: Skill) {
    this.httpClient
      .post(`${environment.skillsapi}skills`, item)
      .subscribe(() => console.log('added skill:', item));
  }

  removeSkill(item: Skill) {
    this.httpClient
      .delete(`${environment.skillsapi}skills/${item.id}`)
      .subscribe(() => console.log('deleted skill: ', item));
  }
}
