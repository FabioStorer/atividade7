import express from 'express';
import { Request, Response } from 'express';
import 'dotenv/config.js';
import cep from 'cep-promise';

const app = express();

app.use(express.json());

app.get('/valida-cep/:cep', async (req: Request<{ cep: string | number}>, res: Response) => {
    const dados: any = await cep(req.params.cep).then((data) => { return data }).catch((err) => { return err });
    return res.send('alo')
});

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at door ${process.env.API_PORT}.`);
});