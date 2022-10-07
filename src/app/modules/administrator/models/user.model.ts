
export class UserModel {
    id: number;
    name: string
    email: string
    createdAt: string
    updatedAt: string

    constructor(data: any) {
        this.id = data.id || null;
        this.name = data.name || null;
        this.email = data.email || null;
        this.createdAt = data.createdAt || null;
        this.updatedAt = data.updatedAt || null;
    }
}
