import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  error: any;

  constructor(public af: AngularFire) { }

// login method with google
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

//login with github
 loginWithGitHub() {
    return this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup
    });
  }

// sign up
signUp(formData){
  if(formData) {
     return this.af.auth.createUser({
        email: formData.value.email,
        password: formData.value.password
      }) 
  }
    
 }

//logout method
  logout() {
    return this.af.auth.logout();
  }




}
