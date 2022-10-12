
export class UserModel {
  id: number;
  name: string
  email: string
  password: string
  createdAt: string
  updatedAt: string
  token: string

  constructor(data: any) {
    this.id = data.id || null;
    this.name = data.name || null;
    this.email = data.email || null;
    this.password = data.password || null;
    this.createdAt = data.createdAt || null;
    this.updatedAt = data.updatedAt || null;
    this.token = data.token || null;
  }
}
