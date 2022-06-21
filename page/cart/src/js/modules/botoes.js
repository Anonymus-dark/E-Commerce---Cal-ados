import { Elementos } from "./elementos.js";

import { renderizar } from "../main.js";

export class Botoes extends Elementos {

    constructor(){
        super()

        Botoes.vitrineCarrinho.addEventListener("click", this )
    }

    handleEvent( event ){

        const { target:{ nodeName }, path:[,,,,,{ id } ]} = event


        if( nodeName === "IMG" ){

            this.removerProduto( id )
        }
      
    }

    removerProduto( id ){

        renderizar.carrinho.forEach( ( produto, indice, array ) => {

            if( produto.nome === id ){

                array.splice( indice, 1 )                
            }

        })

        console.log( renderizar.carrinho )

        localStorage.removeItem( id )

        renderizar.renderizarProdutos()
    }
}