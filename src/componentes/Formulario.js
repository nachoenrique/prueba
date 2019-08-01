import React from 'react'

class Formulario extends React.Component {
    
    handleChange = e => { //console.log({name: e.target.name, value: e.target.value})
                        this.setState({[e.target.name]: e.target.value})}
    handleClick = e => {console.log('Button was clicked')}
    handleSumit = e => {e.preventDefault();console.log('Form was sumitted');console.log(this.state) }
    state={}

    render(){
        return(
           
            <div className="">

                <h1>NEW ATTENDANT</h1>

                <form onSubmit={this.handleSumit}> 
                    
                    <div className="form-group">
                        
                        <label >First Name</label>
                        <input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName}/>

                        <label >Last Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName}/>

                        <label >Email</label>
                        <input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email}/>

                        <label >Job Title</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}/>

                        <label >Tuiter</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="tuiter" value={this.state.tuiter}/>
                    
                        <button onClick={this.handleClick} className="btn btn-primary">Guardar</button>
                        


                    </div>
                
                </form>

            </div>
        )
    }
}

export default Formulario 