import { Component, OnInit } from '@angular/core';
import { SkillsService } from './skills.service';
import { Skill } from './skill.model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor(private service: SkillsService) {}

  skills: Skill[] = [];
  selected: Skill;

  ngOnInit(): void {
    this.service.getSkills().subscribe((data) => (this.skills = data));
  }

  skillSelected(item: Skill) {
    this.selected = item;
  }
}
