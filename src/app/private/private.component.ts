import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss'],
})
export class PrivateComponent {
  message: string | null = null;

  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit() {
    this.auth.getTokenSilently$().subscribe({
      next: (token: any) => {
        this.privateRequest(token);
      },
      error: (err: any) => (this.message = err.message),
    });
  }

  privateRequest(token: string) {
    this.http
      .get<any>(environment.apiUrl + 'base/private', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .subscribe({
        next: (msg) => (this.message = msg.message),
      });
  }
}
