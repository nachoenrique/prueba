import React from 'react'
import'./styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
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
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>
                
                <div className="container">
                    
                    <div className="row">
                        
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName || 'First_Name'} 
                            lastName={this.state.form.lastName || 'Last_Name'} 
                            twitter={this.state.form.twitter || ''}
                            email={this.state.form.email || 'Email'}
                            jobTitle={this.state.form.jobTitle || 'Job_Title'} 
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