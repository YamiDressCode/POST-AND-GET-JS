const express = require('express');
const app = express();
const port = 3000;

let usuarios = [];
app.use(express.json());

app.get('/usuarios', (req,res)=>{
    res.json(usuarios);
});
app.post('/usuarios', (req,res)=>{
    const {nome,email,cpf,telefone} = req.body;
    if (!nome || !email || !cpf || !telefone){
        return res.status(400).json({ error : 'Informações obrigatórias'});
    }
    const novoUsuario = {id: usuarios.length +1,nome,email,cpf,telefone};
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario);
});
app.listen(port,()=>{
    console.log(`Servidor rodando em http://localhost:${port}`);
});