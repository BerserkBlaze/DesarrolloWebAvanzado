import React, { Component } from 'react'

const RContext = React.createContext()

class RContextProvider extends Component {
  state = {
    galeria: [],
    Galeria: [],
    imagenGaleria: "",
    AbrirImagen:false
  }

  CrearGaleria = async () => {
    let response = await fetch("https://dwaapi.juvasquez88.now.sh/api/albums");
    if (response.ok) {
      this.setState({
        galeria: await response.json()
      })
      console.log(this.state.galeria.length)
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  CrearImagenes = async (id) => {
    let response = await fetch(`https://dwaapi.juvasquez88.now.sh/api/photos?albumId=${id}`);
    if (response.ok) {
      this.setState({
        Galeria: await response.json()
      })
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }

  IntercambiarImagenes = (contenido) => {
    this.setState({
      imagenGaleria: contenido
    })
  }

  render() {
    const { children } = this.props

    // share this.state with its consumers (children)
    return (
      <RContext.Provider value={{
        ...this.state,
        CrearGaleria: this.CrearGaleria,
        CrearImagenes: this.CrearImagenes,
        IntercambiarImagenes: this.IntercambiarImagenes
      }}>
        {children}
      </RContext.Provider>
    )
  }
}

const RContextConsumer = RContext.Consumer

export { RContext, RContextProvider, RContextConsumer }