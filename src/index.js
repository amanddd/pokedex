const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard =document.querySelectorAll('cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',() =>{

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')


        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const PokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        PokemonSelecionadoNaListagem.classList.add('ativo')
    })

})