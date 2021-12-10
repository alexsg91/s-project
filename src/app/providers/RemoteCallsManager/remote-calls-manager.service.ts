import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteCallsManagerService {

  constructor(
    private http: HttpClient
  ) { }

  // Unified wrapper for get api calls
  invokeGet (url: string, params?: string): Observable<Object> {
    return this.http.get(url)
  }
}
