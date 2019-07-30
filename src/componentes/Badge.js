import React from 'react'
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'


class Badge extends React.Component{
    render() {


        return (<div className="Badge">
            
           <div className="Badge__header">
             <img src={confLogo} alt="Logo de la Conferencia"/>  
             </div> 
             
             <div className="Badge__section-name">
                 <img className="Badge_avatar" src="https://gravatar.com/avatar?d=identicon" alt="Avatar" />
                <h1>{this.props.firstName} <br/> {this.props.lastName}</h1> 
             </div>

             <div className="Badge__section-info">
                 <h3>{this.props.jobTitle}</h3>
                 <div>@{this.props.tuiter}</div>
             </div>

             <div className="Badge__footer">
                 #Platzi
             </div>



             
           
        </div> )
           

    }
}

export default Badge