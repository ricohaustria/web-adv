import * as React from 'react';
import './SkillList.css';
import { Skill } from '../skill';

export interface SkillListProps {
	skills: Skill[];
}

export interface SkillListState {
	skills: Skill[];
	showList: boolean;
}

export default class SkillList extends React.Component<SkillListProps, SkillListState> {
	constructor(props: SkillListProps) {
		super(props);
		this.state = {
			skills: this.props.skills,
			showList: true
		};
	}

	render() {
		return (
			<div className="container" hidden={!this.state.showList} >
				<div>Your need the follwowing skills</div>
				<ul>
					{this.state.skills.map((item) => {
						return (
							<li key={item.id} onClick={() => this.skillClicked(item)} className="li-skills">
								{item.name}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	skillClicked(skill: Skill) {
		console.log(`You clicked skill ${skill.name}`);
	}
}
