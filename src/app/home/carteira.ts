export class Carteira{
    id: number;
    valor: number;
    caixa: string;
    descricao: string;
    data_valor: string;
    nome: string;
    quantidade: number;
    telefone: number;

    //Fornecedores
    fornecedor: string;
    rua: string;
    bairro: string;
    cidade: string;
    cep: number;
    estado: string;

    
    constructor(id?: number, valor?: number, caixa?:string, descricao?: string, data_valor?: string, nome?: string, quantidade?: number, telefone?: number, rua?: string, bairro?: string, cidade?: string, cep?: number, estado?: string, fornecedor?: string){
        this.id = id;
        this.valor = valor;
        this.caixa = caixa;
        this.descricao = descricao;
        this.data_valor = data_valor;
        
        this.nome = nome;
        this.quantidade = quantidade;
        this.telefone = telefone;

        //Fornecedores
        this.fornecedor = fornecedor;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
        this.estado = estado;
        
    }
}
