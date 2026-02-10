import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Experience {
  position: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  companyLogo?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experienceData: Experience[] = [
    {
      position: 'COO',
      company: 'Taxco Tortillería',
      location: 'Gijón',
      period: 'Ene. 2023 - Actualidad',
      responsibilities: [
        'Atención al cliente',
        'Control de almacén',
        'Selección de personal',
        'Gestión de incidencias'
      ],
      companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3vqX1zg3bd1FcBdwMBM-WkN0yGcChCX3jg&s'
    },
    {
      position: 'Formadora',
      company: 'PFS Grupo',
      location: 'Langreo',
      period: 'Sept. 2022 - Nov. 2022',
      responsibilities: [
        'Diseño e impartición del programa de "Competencias Clave II", dirigido a personas en riesgo de exclusión social',
        'Programa con competencias matemáticas y lingüísticas',
        'Realización de informes diarios y/o semanales'
      ],
      companyLogo: 'https://www.pfsgrupo.com/wp-content/uploads/2024/01/logo-pfs.jpg'
    },
    {
      position: 'Dependienta Sfera',
      company: 'Grupo El Corte Inglés',
      location: 'Oviedo',
      period: 'Jun. 2022 - Sept. 2022 / Nov. 2022 - Ene. 2023',
      responsibilities: [
        'Atención y cobro a clientes',
        'Recepción de mercancía y colocación en tienda y/o almacén',
        'Encargada del probador y orden del mismo'
      ],
      companyLogo: 'https://res.cloudinary.com/westfielddg/image/upload/westfield-media/es/retailer/logos/ashaonrb9rrnlmrs1y0g.png'
    },
    {
      position: 'Prácticas curriculares',
      company: 'Clínica Gardner',
      location: 'Gijón',
      period: 'Nov. 2021 - Ene. 2022',
      responsibilities: [
        'Aplicación de pruebas diagnósticas',
        'Elaboración de informes diagnósticos',
        'Diseño de sesiones y materiales propios de trabajo'
      ],
      companyLogo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2kem5LRa2ph6Sj_hgwvFoDPUpHjkvWicjIw&s'
    },
    {
      position: 'Profesora de extraescolares',
      company: 'Alventus',
      location: 'Oviedo',
      period: 'Oct. 2019 - Mar. 2020',
      responsibilities: [
        'Diseño de sesiones de trabajo',
        'Creación de materiales',
        'Evaluación de resultados'
      ],
      companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGYjkUnu6_IqQ/company-logo_200_200/company-logo_200_200/0/1630555622662/alventus_servicios_ocio_educativos_logo?e=2147483647&v=beta&t=4v8UNTrA62PxqjibFaVI4FE5-Hd1YfNAxORv_uYy-SA'
    }
  ];
}
