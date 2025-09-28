/** biome-ignore-all lint/a11y/useAltText: Not needed in this test */
/** biome-ignore-all lint/a11y/useButtonType: Not needed in this test */
import { useEffect, useState } from "react"

import api from "./api"
import type { Pokemon } from "./types"

function App() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([])
	const [cart, setCart] = useState<Pokemon[]>([])

	useEffect(() => {
		api.list().then(setPokemons)
	}, [])

	return (
		<>
			<section>
				{pokemons.map((pokemon) => (
					<article key={pokemon.id}>
						<img className="nes-container" src={pokemon.image} />
						<div>
							<p>{pokemon.name}</p>
							<p>{pokemon.description}</p>
						</div>
						<button className="nes-btn" onClick={() => setCart(cart.concat(pokemon))}>
							Agregar
						</button>
					</article>
				))}
			</section>
			<aside>
				<button className="nes-btn is-primary">0 items</button>
			</aside>
		</>
	)
}

export default App
