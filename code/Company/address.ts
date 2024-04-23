

export class address{
    public country: string;
    public province: string;
    public street: string;

    constructor (country: string, province: string, street: string){
        this.country = country;
        this.province = province;
        this.street = street;
    }
}