import { Component } from '@angular/core';
import { Experience } from '../models/Experience';
import { Language } from '../models/Language';
import { Languages } from '../enums/ELanguage';
import { Education } from '../models/Education';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  public experiences: Experience[] = [
    new Experience(
      [
        Languages.SPRINGBOOT,
        Languages.SPRINGSECURITY,
        Languages.SERVLET,
        Languages.MYSQL,
        Languages.Java,
        Languages.Flutter,
        Languages.Firebase,
        Languages.Angular,
         Languages.TypeScript,




      ],
      'MAR 2024',
      'CURRENT',
      'VELOCIS SYSTEM PVT LIMITED',
      'JAVA WITH ANGULAR',
      'Development of crossplatform, offlinefirst and making api .'
    ),
    new Experience(
      [
        Languages.Java,
        Languages.Flutter,
        Languages.Angular,

        Languages.TypeScript,
        Languages.RxJS,



      ],
      'Sep 2023',
      'Mar 2024',
      'Tekniko Global',
      'Mobile Developer and backend developer',
      'Development of crossplatform, offlinefirst and mobilefirst applications using SCRUM agile methodology and making api .'
    ),
    // new Experience(
    //   [
    //     Languages.Laravel,
    //     Languages.PHP,
    //     Languages.JavasScript,
    //     Languages.AFrame,
    //   ],
    //   'Apr 2022',
    //   'Jun 2022',
    //   'AFA-MULTIMEDIA',
    //   'Internship in Web Developmen',
    //   "Development of web applications using A-FRAME, a framework based on Three.js. The apps can be used ''normally'', but also with VR headsets."
    // ),
  ];

  public educations: Education[] = [
    new Education(
      'Sep 2019',
      'Aug 2023',
      'Dr. A.P.J. Abdul Kalam Technical University(AKTU)',
      'Computer Science and Engineering',
      ''
    ),
    new Education(
      'Sep 2018',
      'Jun 2019',
      '12TH(up board)',
      'SV inter college in bhadohi',
      ''
    ),
    new Education(
      'Sep 2016',
      'Jul 2017',
      '10th(up board)',
      'SV inter college in bhadohi',

      ''
    ),
  ];
}
