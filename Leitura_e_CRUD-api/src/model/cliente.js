class Cliente {

    constructor(pId, pNome, pData_nasc, pCpf, pSexo, pEstado_civil, pEmail, pTelefone) {
        this.id = pId;
        this.nome = pNome;
        this.data_nasc = pData_nasc;
        this.cpf = pCpf;
        this.sexo = pSexo;
        this.estado_civil = pEstado_civil;
        this.email = pEmail;
        this.telefone = pTelefone;

    }

    get Nome() { return this.nome; }
    set Nome(value) { this.nome = value }

    get Data_nasc() { return this.data_nasc; }
    set Data_nasc(value) {this.data_nasc = value;}

    get Cpf() { return this.cpf; }
    set Cpf(value) { this.cpf = value }

    get Sexo() { return this.sexo; }
    set Sexo(value) { this.sexo = value }

    get Estado_civil() { return this.estado_civil; }
    set Estado_civil(value) { this.estado_civil = value }

    get Email() { return this.email; }
    set Email(value) { this.email = value }

    get Telefone() { return this.telefone; }
    set Telefone(value) { this.telefone = value }
}

module.exports = Cliente;