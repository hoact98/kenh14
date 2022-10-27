export class CategoryModel  {
    id: number;
    name: string
    createdAt: string
    updatedAt: string

    constructor(data: any) {
        this.id = data.id || null;
        this.name = data.name || null;
        this.createdAt = data.createdAt || null;
        this.updatedAt = data.updatedAt || null;
    }
}
