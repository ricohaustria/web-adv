import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from './skills.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[];
  skillToAdd: string;

  constructor(private service: SkillsService) {}

  ngOnInit() {
    this.service.getSkills().subscribe((data) => (this.skills = data));
  }

  removeSkill(sk: Skill) {
    console.log('removing skill: ', sk);
    this.service.removeSkill(sk);
  }

  addSkill() {
    const sk: Skill = { title: this.skillToAdd } as Skill;
    console.log('adding skill: ', sk);
    this.service.addSkill(sk);
  }
}
