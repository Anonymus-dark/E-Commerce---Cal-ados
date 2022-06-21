import { Elementos } from "./elementos.js"

import { produtos } from "../../../../../data/base/data.js";

export class Botoes extends Elementos{

    constructor(){
        super()

        Botoes.produto.addEventListener("click", this)
  
    }

    handleEvent( event ) {

        const { nodeName, id } = event.target

        this.colocarProdutoStorage( nodeName, id )

    }

    colocarProdutoStorage( nodeName, id ){

        if( nodeName === "BUTTON" ){

            const produtoAtual = produtos.filter( ( produto ) => produto.id == Number( id ) )

            localStorage.setItem( produtoAtual[0].nome, produtoAtual[0].id )
        }
    }

}