import { Elementos } from "./elementos.js";

import { produtos } from "../../../../../data/base/data.js";

export class Botoes extends Elementos{

    constructor(){
        super()
        
        Botoes.botaoMobileMenu.addEventListener("click", this )

        Botoes.botaoCategorias.addEventListener("click", this )

        Botoes.botaoPesquisa.addEventListener("click", this )

        Botoes.vitrine.addEventListener("click", this )

        Botoes.botaoPromocao.addEventListener("click", this )

        this.botaoSobre = document.querySelector(".cabecalho__botoes--suspenco")

        this.botaoCategoria = document.getElementById("sessaoBotoes")

        this.sessaoProdutos = document.querySelector(".sessaoProdutos__pesquisa")
    }

    handleEvent( event ){

        const { target:{ className, id }} = event

        this.ativarBotaoSobre( className )
        
        this.ativarBotaoCategorias( className )

        this.ativarBotaoPesquisa( className )
        
        this.enviarProdutoPagina( id )
    }

    ativarBotaoSobre( className ){

        if( className === "botao__botoes--ativar"){

            this.botaoAnimacao( this.botaoSobre )
        }
    }

    ativarBotaoCategorias( className ){

        if( className === "botaoCategorias"){

            this.botaoAnimacao( this.botaoCategoria )
        }

    }

    ativarBotaoPesquisa( className ){

        if( className === "botao__imagem" || className === "informacoes__botao"  ){

            this.botaoAnimacao( this.sessaoProdutos )
        }
    }

    botaoAnimacao( botao ){

        const verificarFlex = botao.style.display == "flex" ? true : false

        const verificarNone = botao.style.display == "none" ? true : false

        if( verificarNone ){

            botao.style.display = "flex"
        }
        if( verificarFlex ){

            botao.style.display = "none"
        }
    }

    enviarProdutoPagina( id ){

        sessionStorage.setItem( "buscarData" , id);

    }
}