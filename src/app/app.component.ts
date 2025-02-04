import { Component , ViewChild, ElementRef } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ height: '0px', opacity: 0 }))
      ])
    ])
  ]
})
export class AppComponent {
  faqItems = [
    {
      question: "What is the process of working with Targols Solutions?",
      answer: "Our process begins with an initial consultation to understand your needs and goals. We then develop a customized plan, followed by design and development phases. Finally, we test and launch your project, providing ongoing support as needed.",
      open: false
    },
    {
      question: "How long does it take to complete a project?",
      answer: "The timeline for completing a project depends on its complexity and scope. However, we strive to deliver projects within the agreed deadlines, typically ranging from a few weeks to a few months.",
      open: false
    },
    {
      question: "What technologies do you use for web development?",
      answer: "We use a variety of technologies, including HTML, CSS, JavaScript, PHP, Python, and popular frameworks like React, Angular, and Laravel. Our choice of technology depends on the specific requirements of the project.",
      open: false
    }
    ,
    {
      question: "Do you offer maintenance and support services?",
      answer: "Yes, we offer comprehensive maintenance and support services to ensure that your website or application remains functional and up-to-date. Our support plans include regular updates, security patches, and troubleshooting.",
      open: false
    }
    ,
    {
      question: "How do you ensure the security of my website?",
      answer: "We implement robust security measures, including SSL certificates, firewalls, and regular security audits, to protect your website from threats. Our development practices also follow industry-standard security protocols.",
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqItems[index].open = !this.faqItems[index].open;
  }
 
  @ViewChild('home', { static: false }) home!: ElementRef;
  @ViewChild('about', { static: false }) about!: ElementRef;
  @ViewChild('services', { static: false }) services!: ElementRef;
  @ViewChild('contact', { static: false }) contact!: ElementRef;

  scrollTo(section: string) {
    let element: ElementRef | undefined;

    switch (section) {
      case 'home':
        element = this.home;
        break;
      case 'about':
        element = this.about;
        break;
      case 'services':
        element = this.services;
        break;
      case 'contact':
        element = this.contact;
        break;
    }

    if (element) {
      element.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
