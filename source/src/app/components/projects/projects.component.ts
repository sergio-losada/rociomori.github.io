import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Formacion {
  year: string;
  title: string;
  institution: string;
  description?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  formacionTopRow: Formacion[] = [
    {
      year: '2025',
      title: 'Cabin Crew Member Course',
      institution: 'Air Hostess Gijón'
    },
    {
      year: '2023',
      title: 'Master en Psicopedagogía Laboral y Social',
      institution: 'TECH Universidad Tecnológica'
    },
    {
      year: '2022',
      title: 'Grado en Pedagogía',
      institution: 'Universidad de Oviedo'
    }
  ];

  formacionBottomRow: Formacion[] = [
    {
      year: '2021',
      title: 'Apoyo Administrativo a la Gestión de RRHH',
      institution: 'Ministerio de Educación, Cultura y Deporte'
    },
    {
      year: '2020',
      title: 'Curso Autismo e Hiperactividad',
      institution: 'Cruz Roja'
    }
  ];
}
