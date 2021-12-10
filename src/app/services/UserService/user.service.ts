import { Injectable } from '@angular/core';
import { RemoteCallsManagerService } from 'src/app/providers/RemoteCallsManager/remote-calls-manager.service';
import { ENDPOINTS } from 'src/app/config/env';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {User, UserModel} from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = ENDPOINTS.randomuserapi.BASEURL
  private _user = new BehaviorSubject<User | null>(null);
  public readonly user = this._user.asObservable();

  constructor(
    private rcm: RemoteCallsManagerService
    ) {
    this.fetchUser()
  }

  fetchUser () {
    return this.rcm.invokeGet(this.baseUrl + ENDPOINTS.randomuserapi.GETUSER).subscribe(
      (res: any) => {
        const r: UserModel = res
        this._user.next(r.results[0])
      }
    )
  }

  getUser (): Observable<User | null> {
    return this.user
  }
}
