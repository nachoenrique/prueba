import React from 'react'

class Formulario extends React.Component {
    
    handleClick = e => {console.log('Button was clicked')}
    //handleSubmit = e => {e.preventDefault();console.log('Form was sumitted');console.log(this.state) }
    //state={}

    render(){
        return(
           
            <div>

                <h1>NEW ATTENDANT</h1>

                <form onSubmit={this.handleSubmit}> 
                    
                    <div className="form-group">
                        
                        <label >First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>

                        <label >Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>

                        <label >Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>

                        <label >Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>

                        <label >Tuiter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}/>
    

                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary" onSubmit={this.handleSubmit}>Guardar</button>
                
                </form>

            </div>
        )
    }
}

export default Formulario 