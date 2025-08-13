import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly appVersion = '1.0.0';
  protected readonly authorName = 'Desenvolvido com Angular';
}
