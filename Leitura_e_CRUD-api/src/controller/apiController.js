const Cliente = require('../model/cliente');
const { insert, verificarExistenciaCliente } = require('../model/apiModel');

const clienteController = {
    adicionarCliente: async (req, res) => {
        try {
            const { nome, data_nasc, cpf, sexo, estado_civil, email, telefone } = req.body;
            const clienteExistente = await verificarExistenciaCliente(cpf);
            if (clienteExistente) {
                return res.json('Cliente já existe');
            }
            const objCliente = new Cliente(null, nome, data_nasc, cpf, sexo, estado_civil, email, telefone);
            const result = await insert(objCliente);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    }
}

module.exports = clienteController