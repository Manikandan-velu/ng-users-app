export interface Users{
    id:number;
    name:string;
    email:string;
    phone:string;
    website:string;
    username:string;
    company: Company;
    address: Address;
}

export interface Company{
    bs: string;
    catchPhrase:string;
    name:string;
}
export interface Address{
    street:string;
    suite:string;
    zipcode:string;
    city:string;
    geo?:{
        lat:string;
        lng:string;
    }
}