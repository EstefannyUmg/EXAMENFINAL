import { conn } from "@/app/Utils/db";
import { NextApiRequest, NextApiResponse } from 'next';
import { Cliente } from '../../../Utils/Cliente';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { ID } = req.query;

    if (req.method === 'GET') {
        try {
            const pool = await conn();
            const result = await pool.request()
                .input('ID', sql.Int, Number(ID))
                .query(`SELECT * FROM CLIENTES WHERE ID = @ID`);

            if (result.recordset.length === 0) {
                return res.status(404).json({ message: 'El cliente no está registrado.' });
            }

            const clienteData = result.recordset[0];
            const cliente = new Cliente(
                clienteData.ID,
                clienteData.NOMBRES,
                clienteData.APELLIDOS,
                clienteData.GENERO,
                clienteData.FECHA_DE_NACIMIENTO,
                clienteData.ESTADO,
                clienteData.DIRECCION,
                clienteData.TELEFONO,
                clienteData.FECHACREACION,
                clienteData.FECHA_ACTUALIZACION,
                clienteData.USUARIO
            );

            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ error: 'Ocurrio un error al obtener la información del cliente.' });
        }
    } else {
        res.status(405).json({ message: 'Error al consultar el servicio' });
    }
}

