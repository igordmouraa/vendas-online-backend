import { AddressEntity } from "../entities/address.entity";

export class ReturnAddressDto {
    complement: string;
    numberAddress: number;
    cep: string;


    constructor(addressEntity: AddressEntity){
        this.complement = addressEntity.complement;
        this.numberAddress = addressEntity.numberAddress;
        this.cep = addressEntity.cep;
    }

}