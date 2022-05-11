import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(
        private authservice : AuthService,
        private router : Router
    ){ }

    canActivate(): boolean  | Promise<boolean> | Observable<boolean | UrlTree> {
        return this.authservice.subject.pipe( take(1), map( user => {
            const authenticated = !!user;
            if ( authenticated ) {
                return true;
            }
            return this.router.createUrlTree([""]);
        }))

    }
}