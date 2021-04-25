import { Inject, Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';

import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';


@Injectable()
export class TripDataService {

  constructor(private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;


  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#addTrip');
    const httpOptions = new Headers();
    httpOptions.append('Authorization', `Bearer ${this.storage.getItem('travlr-token')}`);
    const requestOptions: RequestOptionsArgs = { headers: httpOptions, };
    return this.http
      .post(this.tripUrl, formData, requestOptions) // pass form data in request body
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrips');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      .then(response => response.json() as Trip)
      .catch(this.handleError);
  }

  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside TripDataService#upateTrip');
    console.log(formData);
    //console.log(this.tripUrl + formData.code);
    const httpOptions = new Headers();
    httpOptions.append('Authorization', `Bearer ${this.storage.getItem('travlr-token')}`);
    const requestOptions: RequestOptionsArgs = { headers: httpOptions, };
    return this.http
      .put(this.tripUrl + formData.code, formData, requestOptions)
      .toPromise()
      .then(response => response.json() as Trip[])
      .catch(this.handleError);
   }



  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); 
    return Promise.reject(error.message || error);
  }


  public login(user: User): Promise<AuthResponse> {
    console.log(user);
    return this.makeAuthApiCall('login', user);
   }
   public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
   }

   
   private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
     const url: string = `${this.apiBaseUrl}/${urlPath}`;
     return this.http.post(url, user).toPromise()
     .then(response => response.json() as AuthResponse)
     .catch(this.handleError);
   }
 

}

