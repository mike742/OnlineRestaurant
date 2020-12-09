export class MenuItem {
    id: number = 0;
    name: string = '';
    price: number = 0;
    photoPath: string = '';

    constructor(id: number, name: string, price: number,  path: string) {
        this.id = id;
        this.name = name;
        this.photoPath = path;
        this.price = price;
    }
}