import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { ApiConfig } from '../config/api.config';
import {environment} from "../../environments/environment"

const Api_webUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
}
