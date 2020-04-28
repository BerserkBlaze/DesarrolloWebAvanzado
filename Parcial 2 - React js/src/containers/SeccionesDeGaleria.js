import React, { Component } from "react";

class SeccionesDeGaleria extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default SeccionesDeGaleria;