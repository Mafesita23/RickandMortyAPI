import { useEffect, useState } from 'react'; //importar usseffect
import './App.css'
import Episodes from './assets/components/Episodes'; 
import Characterlist from './assets/components/Characterlist'
function App() {

  return (
    <div>
      <h1 className='titulo'>Rick and Morty app</h1>
      <Episodes />
      <Characterlist />
      </div>
   
  )
}

export default App;
