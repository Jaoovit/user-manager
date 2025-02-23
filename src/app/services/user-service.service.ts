import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  getUser(id: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}/${id}`);
  }

  addUser(user: any): Observable<any[]> {
    return this.httpClient.post<any[]>(this.apiUrl, user);
  }

  updateUser(user: any, id: number): Observable<any[]> {
    return this.httpClient.put<any[]>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(`${this.apiUrl}/${id}`);
  }
}
