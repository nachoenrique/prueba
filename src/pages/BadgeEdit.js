import React from 'react'
import'./styles/BadgeEdit.css'
import header from '../images/platziconf-logo.svg'
import Badge from '../componentes/Badge'
import Formulario from '../componentes/Formulario'
import api from '../api'
import PageLoading from '../componentes/PageLoading'

class BadgeEdit extends React.Component {
    
    state={ loading: true, error: null ,
        form: {firstName:'' ,lastName:'', jobTitle:'', email:'', twitter:''}}

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
            await api.badges.update(this.props.match.params.badgeId,this.state.form)
            this.setState({loading:false})
            this.props.history.push('/badges')
        }
        catch(error){ 
            this.setState({loading:false, error:error})
        }
    }

     componentDidMount(){
        this.fetchData()
     }

     fetchData = async e => {
         this.setState({loading:true, error: null}) 

         try {
             const data = await api.badges.read(this.props.match.params.badgeId)
             this.setState({loading: false, form: data})
         }
         catch(error){
            this.setState({loading: false, error: error})
         }
     }

    render(){

        if(this.state.loading){
            return <PageLoading />
        }
        return(
            <React.Fragment>
                
                
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo"/>
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
                                <h1>EDIT ATTENDANT</h1>
                                <Formulario onChange={this.handleChange} onSubmit={this.handleSubmit} formValues={this.state.form } error={this.state.error}/>
                            </div>
                        </div>


                    </div>
                
                </div>
            
            </React.Fragment>
        )
    }
}

export default BadgeEdit