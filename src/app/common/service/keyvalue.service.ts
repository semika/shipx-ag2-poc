import {KeyValue} from "../model/keyvalue";
import {Injectable} from "@angular/core";
import {Http, Headers, URLSearchParams} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class KeyValueService {
  private keyValueUrl = '/api/keyValues';

  constructor(private http: Http) {}


  getEmpTypeList(): Promise<KeyValue[]> {
    return this.http.get(this.keyValueUrl)
      .toPromise()
      .then(response => response.json().data as KeyValue[])
      .catch(this.handleError);
  }

  private success(): Promise<any> {
    return Promise.resolve();
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
