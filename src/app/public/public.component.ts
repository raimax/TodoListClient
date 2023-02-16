import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent {
  message: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<string>(environment.apiUrl + 'base/public')
      .subscribe({ next: (msg) => (this.message = msg) });
  }
}
