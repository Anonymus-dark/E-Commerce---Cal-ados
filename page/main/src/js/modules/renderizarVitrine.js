import { Elementos } from "./elementos.js";

export class Vitrine extends Elementos {

    constructor( produtos ){
        super()

        this.produtos = produtos

        this.produtos.forEach( this.criarProduto )

    }

    criarProduto( { id, nome, imagens } ){

        const card = document.createElement("a")
        card.href = "../produto/index.html"
        card.classList.add("produtos__card")
        card.id = id

        const imagem = document.createElement("img")
        imagem.classList.add("card__imagem")
        imagem.src = imagens[0]
        imagem.alt = nome

        Vitrine.vitrine.appendChild( card )

        card.appendChild( imagem )

    }

}