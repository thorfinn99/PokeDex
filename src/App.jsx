import { useState } from 'react'
import './App.css'
import Axios from 'axios';

function App() {
  const [pokename, setPokename] = useState('')
  const [chosen, setChosen] = useState(false)
  const [pick, setPick] = useState("Plese search A Pokemon")
  const[pokemon, setpokemon] = useState({
        name: "",
        species: "",
        img1: "",
        img2: "",
        hp: "",
        attack: "",
        defense: "",
        type: "",
  })
  const searchpokemon = () => {
    setPick(pokename)
    setChosen(true)
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`).then((response)=> {
      setpokemon({
        name: pokename,
        species: response.data.species.name,       
        img1: response.data.sprites.front_default,
        img2: response.data.sprites.back_default,
        hp: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        type: response.data.types[0].type.name,
        weight: response.data.weight,
      })
      })
  }

  return (
    <div className=''>
    <div className='flex flex-col mx-auto items-center h-60 bg-blue-400' >
        <h1 className='text-6xl mt-8 font-bold text-white' >PokeDex</h1>
        <input className='w-40 rounded-lg p-2 border-0 outline-0 mt-8 ' defaultValue={name} onChange={(e)=> {setPokename(e.target.value)}} placeholder='Search pokemon' type="text" />
        <button onClick={searchpokemon} className='bg-blue-800 mt-3 text-white px-4 py-2 rounded-lg' >Search</button>
     </div>
     <div className='flex flex-col items-center  mt-6 ' >
      <h1 className='text-5xl font-semibold' >{pick}</h1>
  <div className='flex' >
      <img className='w-[150px]' src={pokemon.img1} alt="" />
      <img className='w-[150px]' src={pokemon.img2} alt="" />
</div>
      <h1  >Type : {pokemon.type} </h1>
      <h1>Hp : {pokemon.hp}</h1>
      <h1>Attack : {pokemon.attack}</h1>
      <h1>Defense : {pokemon.defense}</h1>
      <h1>Weight : {pokemon.weight}</h1>
     </div>
     </div>
  )
}

export default App
