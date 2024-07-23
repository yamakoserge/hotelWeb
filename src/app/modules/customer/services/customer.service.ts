import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../../auth/services/storages/user-storage.service';

const BASIC_URL = "http://localhost:8091/";

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getRooms(pageNumber: number): Observable<any> {
    return this.http.get(BASIC_URL + `api/customer/rooms/${pageNumber}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  bookRoom(bookingDto: any): Observable<any> {
    return this.http.post(BASIC_URL+ `api/customer/book`, bookingDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  createAuthorizationHeader() {
    let authheaders: HttpHeaders = new HttpHeaders();
    return authheaders.set(
      `Authorization`,
      `Bearer ` + UserStorageService.getToken()
    )
  }
}
