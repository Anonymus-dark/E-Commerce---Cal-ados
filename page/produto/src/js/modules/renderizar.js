import { Produto } from "./pegarProduto.js"

import { Elementos } from "./elementos.js"

export class Renderizar extends Elementos {

    static renderizarProduto(){

        const produto = new Produto()

        const produtoPego = produto.pegarData()    

        Renderizar.criarInformacoes( ...produtoPego )

        Renderizar.criarImagens( ...produtoPego )

    }

    static criarInformacoes( produto ){
 
        const tipo = Renderizar.criarTipo( produto )

        const especificacao = Renderizar.criarEspecificacao( produto )

        const disponibilidade = Renderizar.criarDisponibilidade( produto )

        const blocoBotao = Renderizar.criarblocoBotao( produto )

        Renderizar.produto.append( tipo, especificacao, disponibilidade, blocoBotao )

    }

    static criarTipo( produto ){

        const { estilo } = produto

        const tipo = document.createElement("p")
        tipo.classList.add("informacoes__tipo")
        tipo.innerText = estilo

        return tipo
    }

    static criarEspecificacao( produto ){

        const { tipo, marca, nome, sexo } = produto 

        const container = document.createElement("p")
        container.classList.add("informacoes__espeficicacao")

        const categoriaContainer = document.createElement("span")
        categoriaContainer.classList.add("espeficicacao__categoria")
        categoriaContainer.innerText = `${ tipo } `

        const marcaContainer = document.createElement("span")
        marcaContainer.classList.add("espeficicacao__marca")
        marcaContainer.innerText = `${ marca } `

        const nomeContainer = document.createElement("span")
        nomeContainer.classList.add("espeficicacao__nome")
        nomeContainer.innerText = `${ nome } `

        const sexoContainer = document.createElement("span")
        sexoContainer.classList.add("espeficicacao__sexo")
        sexoContainer.innerText = `${ sexo } `

        container.append( categoriaContainer, marcaContainer, nomeContainer, sexoContainer )

        return container
    }

    static criarDisponibilidade( produto ){

        const { disponivel, valor } = produto

        const preco = disponivel ? `R$ ${ valor.toFixed(2) }` : "PRODUTO INDISPONÍVEL"

        const disponibilidade = document.createElement("p")
        disponibilidade.classList.add("informacoes__disponibilidade")
        disponibilidade.innerText = preco

        return disponibilidade
    }

    static criarblocoBotao( produto ){

        const { id, disponivel } = produto

        const blocoBotao = document.createElement("div")
        blocoBotao.classList.add("informacoes__comprar")

        const botao = document.createElement("button")
        botao.classList.add("comprar__botao")
        botao.innerText = "Adicionar Carrinho"
        botao.id = id

        if( disponivel ){

            botao.style.display = "flex"

        }else{

            botao.style.display = "none"
        }

        blocoBotao.appendChild(botao)

        return blocoBotao
    }

    static criarImagens( produto ){

        const { nome, imagens } = produto

        imagens.forEach( ( imagem ) => {

            const img = document.createElement("img")
            img.classList.add("imagens__imagemGlobal")
            img.src = imagem
            img.alt = nome

            Renderizar.imagens.appendChild( img )
        })
    }
}