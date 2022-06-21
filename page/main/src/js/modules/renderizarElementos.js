import { Elementos } from "./elementos.js";

export class RenderizarTamanhos extends Elementos {

    constructor(){
        super()

        window.addEventListener("resize", this )
    }

    handleEvent(){
    
        const { blocoBotoesCabecalho, botaoMobileMenu, barraLateralLinks, sessaoBotoes, ativarPesquisa } = RenderizarTamanhos

        const { innerWidth } = window

        if( innerWidth <= 900 ){
    
                blocoBotoesCabecalho.classList.add("cabecalho__botoes--suspenco")
                blocoBotoesCabecalho.classList.remove("cabecalho__botoes--visivel")
                
                botaoMobileMenu.classList.add("botao__botoes--ativar")
                botaoMobileMenu.classList.remove("botao__botoes--desativar")
                barraLateralLinks.style = "display: none"

                blocoBotoesCabecalho.style.display = "none"
                sessaoBotoes.style.display = "none"
                ativarPesquisa.style.display = "none"
            
        }
        if( innerWidth > 901 ){
            
                blocoBotoesCabecalho.classList.add("cabecalho__botoes--visivel")
                blocoBotoesCabecalho.classList.remove("cabecalho__botoes--suspenco")
    
                botaoMobileMenu.classList.add("botao__botoes--desativar")
                botaoMobileMenu.classList.remove("botao__botoes--ativar")
                barraLateralLinks.style = "display: flex"

                blocoBotoesCabecalho.style.display = "flex"
                sessaoBotoes.style.display = "none"
                ativarPesquisa.style.display = "none"
            
        }
    }
}