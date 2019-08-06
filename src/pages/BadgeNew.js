import React from 'react'
import'./styles/BadgeNew.css'
import Navbar from '../componentes/Navbar'
import header from '../images/badge-header.svg'
import Badge from '../componentes/Badge'
import Formulario from '../componentes/Formulario'

class BadgeNew extends React.Component {
    
    state={form: {firstName:'' ,lastName:'', jobTitle:'', email:'', tuiter:''}}

    handleChange = e => {

        const nextForm = this.state.form;
        nextForm [e.target.name]= e.target.value;

        this.setState ({

            from:nextForm
            }
        )
        }
    

    render(){
        return(
            <div>
                
                
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                
                <div className="container">
                    
                    <div className="row">
                        
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName} 
                            tuiter={this.state.form.tuiter}
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
            
            </div>
        )
    }
}

export default BadgeNew