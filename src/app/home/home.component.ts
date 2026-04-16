import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HomeService} from "./home.service";
import * as THREE from 'three';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
  public age: number = 0;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.age = this.homeService.getAge();
  }
isChatOpen: boolean = false;
userQuestion: string = '';
aiResponse: string = '';

toggleChat() {
  this.isChatOpen = !this.isChatOpen;
}

askAI() {
  const q = this.userQuestion.toLowerCase();

  if (q.includes('skill')) {
    this.aiResponse = 'I have experience in Java, Spring Boot, Angular, Flutter, MySQL.';
  } else if (q.includes('experience')) {
    this.aiResponse = 'I have 3+ years of experience as a Java Developer.';
  } else if (q.includes('job')) {
    this.aiResponse = 'Yes, I am currently looking for job opportunities.';
  } else if (q.includes('location')) {
    this.aiResponse = 'I am based in New Delhi, India.';
  } else {
    this.aiResponse = 'Ask me about my skills, experience, or projects!';
  }

}
}
