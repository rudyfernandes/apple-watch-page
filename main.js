const imagemVisualizacao = document.querySelector('#imagem-visualizacao')
const tituloProduto = document.querySelector('#titulo-produto')
const nomeCor = document.querySelector('#nome-cor-selecionada')
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura')
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura')
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura')

const verdeCipreste = {
    nome: 'Verde-cipreste',
    pasta: 'Imagens-verde-cipreste'
}

const azulInverno = {
    nome: 'Azul-inverno',
    pasta:  'Imagens-azul-inverno'
}

const meiaNoite = {
    nome: 'Meia-noite',
    pasta:  'Imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar',
    pasta:  'Imagens-estelar'
}

const rosaClaro = {
    nome: 'Rosa-claro',
    pasta:  'Imagens-rosa-claro'
}

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ['41 mm','45 mm']

let imagemSelecionada = 1
let tamanhoSelecionado = 1
let corSelecionada = 1

function trocarImagem() {
    const idSelecionado = document.querySelector('[name="opcao-imagem"]:checked').id
    imagemSelecionada = idSelecionado.charAt(0) 
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`
}

function trocarTamanho() {
    const idSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoSelecionado = idSelecionado.charAt(0)

    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    if(opcoesTamanho[tamanhoSelecionado] === '41 mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    }else {
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
}

function trocarCor() {
    const id = document.querySelector('[name="opcao-cor"]:checked').id
    corSelecionada = id.charAt(0)
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`
    nomeCor.innerText = `Cor - ${opcoesCores[corSelecionada].nome}`
    miniaturaImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-0.jpeg`
    miniaturaImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-1.jpeg`
    miniaturaImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-2.jpeg`

    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].pasta}/imagem-${imagemSelecionada}.jpeg`

}