import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, catchError } from 'rxjs/operators'
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Injectable()
export class Intorceptor implements HttpInterceptor {
 
    constructor(
        public http: HttpClient, public router: Router

    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const changedReq = req.clone(
            {
                // withCredentials: true,
                headers: req.headers.set('Content-Type', 'application/json')
                    .set('charset', 'UTF-8'),
                url: this.updateUrl(req.url),
            }
        );

        return next.handle(changedReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    //console.log('event--->>>', event);
                }
                return event;
            }, catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    return Observable.throw(error);
                }
                else if (error.status === 403 || error.status === 500 || error.status === 503) {
                    return Observable.throw(error);
                }
                else {
                    // alert('ERROR')
                    return Observable.throw(error);
                }})
            ));
    }

    private updateUrl(req: string) {
        return environment.api_url + req;
    }

}
