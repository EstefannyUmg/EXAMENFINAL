// Utils/Cliente.ts
export class Cliente {
    ID: number;
    NOMBRES: string;
    APELLIDOS: string;
    GENERO: 'M' | 'F';
    FECHA_DE_NACIMIENTO: Date;
    ESTADO: string;
    DIRECCION: string;
    TELEFONO: string;
    FECHACREACION: Date;
    FECHA_ACTUALIZACION: Date | null;
    USUARIO: string;

    constructor(
        ID: number,
        NOMBRES: string,
        APELLIDOS: string,
        GENERO: 'M' | 'F',
        FECHA_DE_NACIMIENTO: Date,
        ESTADO: string,
        DIRECCION: string,
        TELEFONO: string,
        FECHACREACION: Date,
        FECHA_ACTUALIZACION: Date | null,
        USUARIO: string
    ) {
        this.ID = ID;
        this.NOMBRES = NOMBRES;
        this.APELLIDOS = APELLIDOS;
        this.GENERO = GENERO;
        this.FECHA_DE_NACIMIENTO = FECHA_DE_NACIMIENTO;
        this.ESTADO = ESTADO;
        this.DIRECCION = DIRECCION;
        this.TELEFONO = TELEFONO;
        this.FECHACREACION = FECHACREACION;
        this.FECHA_ACTUALIZACION = FECHA_ACTUALIZACION;
        this.USUARIO = USUARIO;
    }
}



// Utils/InformacionGeneral.ts
export class InformacionGeneral {
    TipoDeInformacion: string;
    FechaCreacion: Date;
    FechaActualizacion: Date | null;
    UsuarioCreador: string;
    Estado: string;

    constructor(
        TipoDeInformacion: string,
        FechaCreacion: Date,
        FechaActualizacion: Date | null,
        UsuarioCreador: string,
        Estado: string
    ) {
        this.TipoDeInformacion = TipoDeInformacion;
        this.FechaCreacion = FechaCreacion;
        this.FechaActualizacion = FechaActualizacion;
        this.UsuarioCreador = UsuarioCreador;
        this.Estado = Estado;
    }
}
