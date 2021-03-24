import HttpClient from "utils/http/http_client_interceptor"
import {configs} from 'configs/env';

class MainApi extends HttpClient {
  public constructor() {
    super('');
  }

//   public getUsers = () => this.instance.get<User[]>('/users');
  
//   public getUser = (id: string) => this.instance.get<User>(`/users/${id}`);
}