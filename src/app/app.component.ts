import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA} from '@angular/material';


import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
  private isLoggedIn: Boolean;
  public user:any;

  constructor(
    public authService: AuthService, 
    private router: Router,
    public dialog: MdDialog) {

    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.router.navigate(['']);
        } else {
          this.isLoggedIn = true;
          this.user = auth
          this.dialog.closeAll();
          console.log("Logged in");
          this.router.navigate(['/map']);
        }
      }
    );
  }


    //open dialog

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog,{
       height: '400px',
       width: '400px',
    });
  }

  //close dialog
  logOut(){
    this.authService.logout();
    this.router.navigate(['']);
  }

}

@Component({

  selector: 'app-dialog-login',
  styles:[],
  templateUrl: './dialog-login.component.html'
})
export class DialogOverviewExampleDialog {
  error:any
  public formShowing:boolean = false

  constructor(public authService: AuthService, 
    private router:Router) { }

  ngOnInit() {}

  loginGoogle() {
    this.authService.loginWithGoogle()
      .then((data) => {
      this.router.navigate(['/map']);})
      .catch((err) =>{
        console.log('err',err);
    })
  }

//




//
  loginGitHub() {
    this.authService.loginWithGitHub()
      .then((data) => {
      this.router.navigate(['/map']);})
      .catch((err) =>{
        console.log('err',err);
    })
  }
// signup and automatic login
  onSubmit(formData) {
    console.log(formData)
    if(formData.value=={}){
        console.log('wr')
    }else{
         this.authService.signUp(formData).then(
          (success) => {
          console.log(success);
          this.router.navigate(['/map'])
        }).catch(
          (err) => {
          console.log(err);
          this.error = err;
        })
    }
    
  }

 
}
