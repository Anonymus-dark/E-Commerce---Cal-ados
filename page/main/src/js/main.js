import { RenderizarTamanhos } from "./modules/renderizarElementos.js"

import { Botoes } from "./modules/botoes.js"

import { Vitrine } from "./modules/renderizarVitrine.js"

import { produtos } from "../../../../data/base/data.js"

import { Filtro } from "./modules/filtroProdutos.js"

const renderizacaoTela = new RenderizarTamanhos()

renderizacaoTela.handleEvent()

const botoes = new Botoes()

export const vitrine = new Vitrine( produtos )

const filtro = new Filtro()




