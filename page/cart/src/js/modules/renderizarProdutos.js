import { Elementos } from "./elementos.js";

import { produtos } from "../../../../../data/base/data.js"

export class Renderizar extends Elementos{

    constructor(){
        super()

        this.carrinho = []
    }

    renderizarProdutos(){

        this.colocarProdutosCarrinho()

        Renderizar.vitrineCarrinho.innerHTML = ""

        this.carrinho.forEach( this.criarProdutos )

        this.colocarQuantidades()
    }

    colocarQuantidades(){

        const valotTotal = this.carrinho.reduce( ( acumulador, atual ) => acumulador += atual.valor ,0 )
        Renderizar.blocoValor.innerText = ""
        Renderizar.blocoValor.innerText = `R$ ${ valotTotal.toFixed(2) }`

        const quantidadeTotal = this.carrinho.length
        Renderizar.blocoQuantidade.innerText = ""
        Renderizar.blocoQuantidade.innerText = quantidadeTotal

    }

    colocarProdutosCarrinho(){

        const ids = Object.values( localStorage )

        const numIds = ids.map( ( id ) => Number( id ))

        numIds.forEach( ( numerosId ) => {

            const produto = produtos.filter( ( produtoAtual ) => produtoAtual.id === numerosId )

            if( produto != 0){
                this.carrinho.push( ...produto )
            }
        })
    }

    criarProdutos( produto ){

        const card = Renderizar.criarCard( produto )

        const blocoImagem = Renderizar.criarBlocoImagem( produto )

        card.appendChild( blocoImagem )

        Renderizar.vitrineCarrinho.appendChild( card )

        

    }

    static criarCard( produto ){

        const card = document.createElement("div")
        card.classList.add("produtos__card")
        card.id = produto.nome

        return card
    }

    static criarBlocoImagem( produto ){

        const { imagens, nome } = produto

        const blocoImagem = document.createElement("div")
        blocoImagem.classList.add("card__blocoImagem")

        const imagem = document.createElement("img")
        imagem.classList.add("blocoImagem__imagem")
        imagem.src = imagens[0]
        imagem.alt = nome

        const blocoInformacoes = Renderizar.criarBlocoInformacoes( produto )

        blocoImagem.append( imagem, blocoInformacoes )

        return blocoImagem
    }

    static criarBlocoInformacoes( produto ) {

        const blocoInformacoes = document.createElement("div")
        blocoInformacoes.classList.add("blocoImagem__informacoes")      

        const blocoNome = Renderizar.criarBlocoNome( produto )

        const valorLixo = Renderizar.criarValorLixo( produto )

        blocoInformacoes.append( blocoNome, valorLixo )

        return blocoInformacoes
    }

    static criarBlocoNome( produto ) {

        const { nome } = produto

        const blocoNome = document.createElement("div")
        blocoNome.classList.add("informacoes__caracteristicas")

        const titulo = document.createElement("p")
        titulo.classList.add("caracteristicas__nome")
        titulo.innerText = nome
       
        blocoNome.appendChild(titulo)

        return blocoNome
    }

    static criarValorLixo( produto ) {

        const { valor } = produto

        const valorLixo = document.createElement("div")
        valorLixo.classList.add("informacoes__lixo")

        const valorProduto = document.createElement("p")
        valorProduto.classList.add("informacoes__valor")
        valorProduto.innerText = `R$ ${ valor.toFixed(2) }`

        const lixo = document.createElement("button")
        lixo.classList.add("lixo__botao")

        const imagem = document.createElement("img")
        imagem.classList.add("botao__imagem")
        imagem.src = "./src/img/trash-svgrepo-com.svg"
        imagem.alt = "lixo"

        lixo.appendChild( imagem )

        valorLixo.append( valorProduto, lixo )

        return valorLixo
    }

}