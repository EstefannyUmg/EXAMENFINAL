// app/api/creacionCliente/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { Cliente } from"@/app/Utils/Cliente";
import { conn } from "@/app/Utils/db";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { ID, NOMBRES, APELLIDOS, GENERO, FECHA_DE_NACIMIENTO, ESTADO } = req.body;

        const nuevoCliente = new Cliente(ID, NOMBRES, APELLIDOS, GENERO, new Date(FECHA_DE_NACIMIENTO), ESTADO,
        DIRECCION, TELEFONO, FECHACREACION, FECHA_ACTUALIZACION, USUARIO);
        
        try {
            const pool = await conn();
            await pool.request()
                .input('ID', nuevoCliente.ID)
                .input('NOMBRES', nuevoCliente.NOMBRES)
                .input('APELLIDOS', nuevoCliente.APELLIDOS)
                .input('GENERO', nuevoCliente.GENERO)
                .input('FECHA_DE_NACIMIENTO', nuevoCliente.FECHA_DE_NACIMIENTO)
                .input('ESTADO', nuevoCliente.ESTADO)
                .query(`
                    INSERT INTO Clientes (ID, NOMBRES, APELLIDOS, GENERO, FECHA_DE_NACIMIENTO, ESTADO)
                    VALUES (@ID, @NOMBRES, @APELLIDOS, @GENERO, @FECHA_DE_NACIMIENTO, @ESTADO)
                `);
            res.status(201).json({ message: 'El cliente se creo exitosamente' });
        } catch (error) {
            res.status(500).json({ error: 'Ocurrio un error al momento de crear el cliente.' });
        }
    } else {
        res.status(405).json({ message: 'Método no permitido' });
    }
}
