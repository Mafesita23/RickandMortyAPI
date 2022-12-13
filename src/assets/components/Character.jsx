function Character({character}) {
    return(
        <div>
              <h1 className="letter">Nombre: {character.name}</h1>
              <img src={character.image} alt={character.name} />

        </div>
    )
}
export default Character