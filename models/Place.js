export class Place {
    constructor (title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location;
        this.id = Math.floor(Math.random() * 1000000).toString() 
    }
}