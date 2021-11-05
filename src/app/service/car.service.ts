import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = environment.apiUrl + '/api/vehicles';

  constructor(private http: HttpClient) {
  }

  getAllMarques(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallmakes?format=json`)
  }
}
