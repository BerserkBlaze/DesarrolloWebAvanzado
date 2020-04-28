import React, { Component } from "react";
import Image from './Image';
import { RContext,RContextConsumer } from '../context/RContext';
import SeccionesDeGaleria from "./SeccionesDeGaleria"
import GetImg from "./GetImg"

export default class GaleriaDeImagenes extends Component {
    state = {
    }
    render() {
        const { CrearGaleria, CrearImagenes, IntercambiarImagenes } = this.context;
        CrearGaleria();
        return (
            <React.Fragment>
                <div className="vh-100 row">
                    <SeccionesDeGaleria>
                    <React.Fragment>
                    <RContextConsumer>
                            {
                                context => (
                                    context.galeria.map(resp => (
                                        <Image outline={context.Galeria.length > 0 ? resp.id === context.Galeria[0].respId : false} key={resp.id} dir={() => CrearImagenes(resp.id)} src={resp.url}></Image>
                                    ))
                                )
                            }
                        </RContextConsumer>
                    </React.Fragment>
                    </SeccionesDeGaleria>
                    <SeccionesDeGaleria>
                        <React.Fragment>
                        <RContextConsumer>
                            {
                                context => (
                                    context.Galeria.map(contenido => (
                                        <Image key={contenido.id} src={contenido.url} dir={() => {IntercambiarImagenes(contenido.url);this.setState({AbrirImagen:true})}}></Image>
                                    ))
                                )
                            }
                        </RContextConsumer>
                        </React.Fragment>
                    </SeccionesDeGaleria>
                </div>
                <React.Fragment>
                <RContextConsumer>
                    {
                        context => (
                            <GetImg url={context.imagenGaleria} show={this.state.AbrirImagen} dir={()=> this.setState({AbrirImagen:false})} />
                        )
                    }
                </RContextConsumer>
                </React.Fragment>
            </React.Fragment>
        );
    }
}

GaleriaDeImagenes.contextType = RContext