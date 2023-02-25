import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Array<string> = ['Empathy', 'Teamwork', 'Passion for Learning & Teaching'];
  lenguajesProgra: Array<string> = ['C++', 'C#', 'Clojure', 'CSS', 'HTML', 'JavaScript/TypeScript', 'PHP', 'Python', 'SASS/SCSS', 'Scheme/Racket', 'SQL', 'Swift'];
  herramientasProgra: Array<string> = ['Angular', 'Azure', 'Bootstrap', 'Flask', 'iOS', 'MariaDB', 'MySQL', 'Node JS', 'SQLAlchemy', 'React JS', 'SQL Server', 'Unity'];
}
