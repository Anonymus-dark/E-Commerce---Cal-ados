import { Elementos } from "./elementos.js";

import { produtos } from "../../../../../data/base/data.js"

import { Vitrine } from "./renderizarVitrine.js";

export class Filtro extends Elementos {

    constructor(){
        super()
        
        Filtro.barraPesquisa.addEventListener("input", this )
        Filtro.pesquisa.addEventListener("click", this )
    }

    handleEvent( event ){

        const valorEntrada = Filtro.barraPesquisa.value

        const deixarMinusculo = this.minusculo( valorEntrada )

        const retirarEspaco = this.espaco( deixarMinusculo )

        const arrayProdutos = this.pegarProdutos( retirarEspaco )
    }

    minusculo( valorEntrada ){

        return valorEntrada.toLowerCase()
    }

    espaco( valorEntrada ){

        return valorEntrada.trim()
    }

    pegarProdutos( valorEntrada ){

        const produto = produtos.filter( ( produto ) => {

            const nome = produto.nome.toLowerCase()

            return nome.includes( valorEntrada )

        })

        Filtro.vitrine.innerHTML = ""

        const vitrine = new Vitrine( produto )
        
    }
}