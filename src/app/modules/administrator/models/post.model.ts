import { CategoryModel } from './category.model';

export class PostModel{
    id: number;
    title: string
    description: string
    shortDesc: string
    image: string
    categoryId: number
    createdAt: string
    updatedAt: string
    category: CategoryModel

    constructor(data: any) {
        this.id = data.id || null;
        this.title = data.title || null;
        this.description = data.description || null;
        this.shortDesc = data.shortDesc || null;
        this.image = data.image || null;
        this.categoryId = data.categoryId || null;
        this.createdAt = data.createdAt || null;
        this.updatedAt = data.updatedAt || null;
        this.category = data.category
    }
}
