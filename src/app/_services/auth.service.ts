import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8080/binauth';
const type = "Bearer";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/signin', {
      email,
      password
    }, httpOptions);
  }


  updatepaswrd(email: string)
  : Observable<any> {
    return this.http.post(AUTH_API + '/updatepassword', {
      email
    }, httpOptions);}

    delate(email: string)
    : Observable<any> {
      return this.http.post(AUTH_API + '/delete', {
        email
      }, httpOptions);}

    newpassword(token: string,password:string)
    : Observable<any> {
      return this.http.post(AUTH_API + '/requestnewpasswode', {
        token,
        password
      }, httpOptions);}

  register( email: string, password: string,username2: string,
    nom: string,
    prenom: string,
    city: string,
    country: string,
    postalcode: string,birthday:string): Observable<any> {
    return this.http.post(AUTH_API + '/signupuser', {
    //  username,
      email,
      password,
      username2,
      nom,
      prenom,
      city,
      country,
      postalcode,
      birthday
    }, httpOptions);
  }
  
  updateadmine( email: string, password: string,username2: string,
    nom: string,
    prenom: string,
    city: string,
    country: string,
    postalcode: string,birthday:string,role:string,token:string): Observable<any> {
      
    return this.http.post(AUTH_API + '/updateAdmin', {
    //  username,
      email,
      password,
      username2,
      nom,
      prenom,
      city,
      country,
      postalcode,
      birthday,role,token,type
    }, httpOptions);
  }

  uploadImageadmin(image,id:String):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post<any>(AUTH_API+'/updateAdminimage/'+id,image,{headers:headers});
}

getimageadmin(id:String):Observable<any>{

  return this.http.get<any>(AUTH_API+'/getAdminimage/'+id);
}

uploadImageuser(image,id:String):Observable<any>{
  let headers = new HttpHeaders();
  headers.append('Content-Type', 'multipart/form-data');
  headers.append('Accept', 'application/json');
  return this.http.post<any>(AUTH_API+'/updateuserimage/'+id,image,{headers:headers});
}

getimageuser(id:String):Observable<any>{

return this.http.get<any>(AUTH_API+'/getuserimage/'+id);
}

  updateuser( email: string, password: string,username2: string,
    nom: string,
    prenom: string,
    city: string,
    country: string,
    postalcode: string,birthday:string,role:string,token:string): Observable<any> {
      
    return this.http.post(AUTH_API + '/updateUser', {
    //  username,
      email,
      password,
      username2,
      nom,
      prenom,
      city,
      country,
      postalcode,
      birthday,role,token,type
    }, httpOptions);
  }
}
