import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  competencias: string[] = [
    'Conocimiento',
    'Trabajo en Equipo',
    'Información',
    'Creatividad',
    'Comunicación',
    'Negociación'
  ];

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
