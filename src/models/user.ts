export abstract class User {
    private _id?: number;
    private _nombre?: string;
    private _apellido?: string;
    private _correo: string;
    private _telefono?: number;
    private _redesSociales?: string[];
    private _ciudad?: string;
    private _nacionalidad?:String;
    private _codigoPostal?:number;
    private _verificado?:boolean;
    private _cedula?:number



    
    constructor(correo:string){
        this._correo=correo;
    }
    get correo(): string {
        return this._correo;
    }
    set correo(value: string) {
        this._correo = value;
    }
}
