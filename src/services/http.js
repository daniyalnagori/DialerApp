import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';

export class HttpService {
    //Get request HTTP service
    static get(url, headers = { 'Content-Type': 'application/json' }) {
        return Observable.ajax({
            url,
            method: 'GET',
            headers,
            async: true,
            crossDomain: true,
            withCredentials: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
    //Post request HTTP service
    static post(url, body, headers = { 'Content-Type': 'application/json' }) {
        return Observable.ajax({
            url,
            method: 'POST',
            body: JSON.stringify(body),
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    }
}