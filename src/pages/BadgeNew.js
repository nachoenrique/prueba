import React from 'react'
import'./styles/BadgeNew.css'
import Navbar from '../componentes/Navbar'
import header from '../images/badge-header.svg'
import Badge from '../componentes/Badge'
class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Nacho" lastName="Enrique" tuiter="notengo" jobTitle="Ing. en Sistema de Informacion" avatarUrl="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew