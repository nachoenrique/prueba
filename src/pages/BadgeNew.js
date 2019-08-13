import React from 'react'
import'./styles/BadgeNew.css'
import header from '../images/badge-header.svg'
import Badge from '../componentes/Badge'
import Formulario from '../componentes/Formulario'

class BadgeNew extends React.Component {
    
    state={form: {firstName:'' ,lastName:'', jobTitle:'', email:'', twitter:''}}

    handleChange = e => {
        this.setState({
            form: {
              ...this.state.form,
              [e.target.name]: e.target.value,
            },
          });
        }
    

    render(){
        return(
            <React.Fragment>
                
                
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                
                <div className="container">
                    
                    <div className="row">
                        
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            twitter={this.state.form.twitter}
                            email={this.state.form.email}
                            jobTitle={this.state.form.jobTitle} 
                            avatarUrl="" />
                        </div>

                        <div>
                            <div className="col-6">
                                <Formulario onChange={this.handleChange} formValues={this.state.form}/>
                            </div>
                        </div>


                    </div>
                
                </div>
            
            </React.Fragment>
        )
    }
}

export default BadgeNew