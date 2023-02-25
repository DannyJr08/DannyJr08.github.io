import { Component } from '@angular/core';

interface Repositorio {
  nombre: string,
  liga: string
}

interface InfoWorkExperience {
  puesto: string,
  lugar: string,
  duracion: string,
  descripcion: string,
  repositorio: Array<Repositorio>
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {
  Experiencias: Array<InfoWorkExperience> = [
    {puesto: 'SOFTWARE ENGINEER', lugar: 'PERFICIENT', duracion: 'feb. 2023 - current', descripcion: 'On a college project in association with Perficient, I develop in team a web application (Angular), so Perficient employees can check through an artificial intelligence a knowledge base of the enterprise.', repositorio: []},
    {puesto: 'SOFTWARE ENGINEER', lugar: 'TECNOLÓGICO DE MONTERREY', duracion: 'sept. 2022 - current', descripcion: '1.- Development of an Angular web application for the smile analysis of the people shot by a webcam from their computer. It was used Azure due to the services of Blob Storage and Face. The deployment is on Microsoft Sharepoint. 2.- Participation in the documentation of Chatbot Development Team\'s Wiki on Microsoft SharePoint. 3.- Participation in the TecBot UML diagrams making.', repositorio: []},
    {puesto: 'SOFTWARE ENGINEER', lugar: 'TECNOLÓGICO DE MONTERREY', duracion: 'sept. 2022 - current', descripcion: 'On a scholarship service college project, I develop in team a web application (PHP), so coaches from Wellness Center Gym at Tecnológico de Monterrey Campus Monterrey can manage their students and statistics, as well as workout routines that will be available for all students. At the same time, it was developed a mobile application (Flutter) to students in order to manage their statistics, check and do their workout routines. For database we used MySQL.', repositorio: []},
    {puesto: 'SOFTWARE ENGINEER', lugar: 'TECNOLÓGICO DE MONTERREY', duracion: 'sept. 2022 - current', descripcion: 'I develop in team a web application (PHP), so coaches from Wellness Center Gym at Tecnológico de Monterrey Campus Monterrey can manage their students and statistics, as well as workout routines that will be available for all students. At the same time, it was developed a mobile application (Flutter) to students in order to manage their statistics, check and do their workout routines. For database we used MySQL.', repositorio: []},
    {puesto: 'SOFTWARE ENGINEER', lugar: 'IBM', duracion: 'oct. 2022 - dic. 2022', descripcion: 'On a college project in association with IBM, I developed in team a traffic simulation on Unity, where the cars\' behaviour was coded on Python with Mesa framework, focused on multiagents. The API was developed with Flask.', repositorio: [{nombre: 'Repo', liga: 'https://github.com/DannyJr08/Reto-Sistemas-Multiagentes_Movilidad-Urbana'}]},
    {puesto: 'SOFTWARE ENGINEER', lugar: 'CAPA X CAPA', duracion: 'jun. 2022 - dic. 2022', descripcion: 'On a college social service project, I had to develop in team a website (React JS) to show and expose the activities, goals, and teaching content to students from Capa X Capa in order to help them to reach more people they can aid and teach. For the backend it was used MongoDB, Express JS, and Amazon Web Services (AWS) for the S3 service.', repositorio: []},
    {puesto: 'PROPOSAL SPECIALIST', lugar: 'CÁRITAS DE MONTERREY, A.B.P.', duracion: 'oct. 2022', descripcion: 'On a college project in association with Cáritas de Monterrey, I proposed a web application to manage the staff of the organization with the purpose of incrementing their productivity. The proposal includes an ER Diagram and a Figma Design of the web app.', repositorio: []},
    {puesto: 'SOFTWARE ENGINEER', lugar: 'SECRETARÍA DE SALUD', duracion: 'ago. 2022 - oct. 2022', descripcion: 'On a college project in association with Secretaría de Salud, I developed in team an iOS application directed to heart disease patients, so they can register their blood pressure and pulse measurements, check their statistics, and link with their medics in order to view their prescriptions and indications from them. On the other hand, it was also developed a React JS web application, so medics can manage their patient, view their statistics, and assign prescriptions and indications for them. For backend it was used Firebase, the services that we used were Authentication, Database, and Storage.', repositorio: [{nombre: 'Mobile', liga: 'https://github.com/omarsinho/SaludOS-Movil'}, {nombre: 'Web', liga: 'https://github.com/DannyJr08/los-trabajos-de-steve_ssa-web'}]},
    {puesto: 'SOFTWARE ENGINEER', lugar: 'DENSO MÉXICO SA DE CV', duracion: 'feb. 2022 - may. 2022', descripcion: 'On a college project in association with Denso, I had to develop in team a web application (React JS) to filter applicants that want to work at Denso, with the involvement of a database (MariaDB) that collects candidates\' information from a psychometric test (Unity) they previously take that was also developed by my team and me. The API was developed with Python (Flask). I worked on this project with an account that is now deleted, its name was A01411625.', repositorio: [{nombre: 'Frontend', liga: 'https://github.com/jaiovi/Denso-Git'}, {nombre: 'Backend', liga: 'https://github.com/jaiovi/Boilerplate-Denso-API'}]},
    {puesto: 'DEVELOPER OF A SAMPLE VIDEOGAME', lugar: 'UNIVERSITY OF WASHINGTON', duracion: 'dic. 2019 - dic. 2019', descripcion: 'On an international school course at Seattle, I developed in team a test videogame project in Unity, just to prove our skills as game developers.', repositorio: []}
  ];
}
