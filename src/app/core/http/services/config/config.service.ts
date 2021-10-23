import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  apiEndpoint: string = environment.API_BASE_URL;

  constructor() { }
}
