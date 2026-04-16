import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-chat',
  templateUrl: './ai-chat.component.html',
})
export class AiChatComponent {

  userQuestion: string = '';
  aiResponse: string = '';

  askAI() {
    const q = this.userQuestion.toLowerCase();

    if (q.includes('skill')) {
      this.aiResponse = 'I have experience in Java, Spring Boot, Angular, Flutter, MySQL.';
    } else if (q.includes('experience')) {
      this.aiResponse = 'I have 3+ years of experience as a Java Developer working on IRCTC and other projects.';
    } else if (q.includes('job')) {
      this.aiResponse = 'Yes, I am currently looking for job opportunities.';
    } else if (q.includes('location')) {
      this.aiResponse = 'I am based in New Delhi, India.';
    } else {
      this.aiResponse = 'Feel free to ask about my skills, experience, or projects!';
    }
  }
}
