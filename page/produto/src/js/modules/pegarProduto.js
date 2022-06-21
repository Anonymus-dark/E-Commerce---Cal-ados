import { produtos } from "../../../../../data/base/data.js"

export class Produto {

    constructor(){

        this.id = sessionStorage.getItem( "buscarData" )
    }

    pegarData(){

        const produtoAtual = produtos.filter( ( produto ) => produto.id === Number( this.id ) )

        return produtoAtual
    }
}