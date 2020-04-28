import React, { Component } from "react";

class Image extends Component {
  render() {
    let estilos = "GaleriaDeArte p-2 "
    return (
      <div className={estilos} onClick={this.props.dir}>
        <img src={this.props.src} alt="" />
      </div>
    )
  }
}

export default Image;