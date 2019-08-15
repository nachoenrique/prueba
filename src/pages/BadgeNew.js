import React from 'react'
import'./styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../componentes/Badge'
import Formulario from '../componentes/Formulario'
import api from '../api'

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
    
    handleSubmit = async e => {
        e.preventDefault()
        this.setState({loading:true , error:null})
        try{
            await api.badges.create(this.state.form)
            this.setState({loading:false})
        }
        catch(error){ 
            this.setState({loading:false, error:error})
        }
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
                                <Formulario onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form }/>
                            </div>
                        </div>


                    </div>
                
                </div>
            
            </React.Fragment>
        )
    }
}

export default BadgeNew