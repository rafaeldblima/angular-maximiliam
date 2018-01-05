// import { Router } from '@angular/router';
// import * as firebase from 'firebase';
// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
//
// import * as fromApp from '../store/app.reducer';
// import * as AuthActions from '../auth/store/auth.actions';
//
// @Injectable()
// export class AuthService {
//   token: string;
//
//   constructor(private router: Router, private store: Store<fromApp.AppState>) {}
//
//   signupUser(email: string, password: string) {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(
//         user => {
//           console.log(user);
//           this.store.dispatch(new AuthActions.Signup());
//           firebase.auth().currentUser.getToken()
//             .then(
//               (token: string) => {
//                 this.store.dispatch(new AuthActions.SetToken(token));
//               }
//             )
//         }
//       )
//       .catch(
//         error => console.log(error)
//       )
//   }
//
//   signinUser(email: string, password: string) {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(
//         response => {
//           console.log(response);
//           this.store.dispatch(new AuthActions.Signin());
//           this.router.navigate(['/']);
//           firebase.auth().currentUser.getToken()
//             .then(
//               (token: string) => {
//                 this.store.dispatch(new AuthActions.SetToken(token));
//               }
//             )
//         }
//       )
//       .catch(
//         error => console.log(error)
//       );
//   }
//
//   logout() {
//     firebase.auth().signOut();
//     // this.token = null;
//   }
//
//   // getToken() {
//   //   firebase.auth().currentUser.getToken()
//   //     .then(
//   //       (token: string) => this.token = token
//   //     );
//   //   return this.token;
//   // }
//   //
//   // isAuthenticated() {
//   //   return this.token != null;
//   // }
// }
