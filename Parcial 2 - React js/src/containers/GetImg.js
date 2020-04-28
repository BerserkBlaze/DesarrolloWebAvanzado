import React, { Component } from "react";

class GetImg extends Component {
    render() {
        let estilos =`modal ${this.props.show ? " d-block": " d-none"}`;
        return (
            <div className={estilos} onClick={this.props.dir}>
                <div className="modal-dialog">
                <img src={this.props.url} alt="" />
                </div>
            </div>
        )
    }
}

export default GetImg;