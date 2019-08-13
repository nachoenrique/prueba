import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import BadgesList from '../componentes/BadgesList'
import { Link } from 'react-router-dom'
import api from '../api'



class Badges extends React.Component {

    state = {
        loading: true,
        error: null,
        data: undefined
    }

    

    fetchData = async () => {
        this.setState({loading: true, error:null})

        try {
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        } catch(error) {
            this.setState({loading: false, error: error})
        }
    }

    componentDidMount(){
        this.fetchData()
    }
    

    render() {

        if(this.state.loading === true){
            return('Loading...')
        } 

        return (

            <React.Fragment>

                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_conf-logo" src={confLogo} alt="Cong Logo" />
                        </div>
                    </div>
                </div>

                

                <div className="Badges__container">

                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <BadgesList badges={this.state.data} />

                </div>

                

            </React.Fragment>

        )
    }

}

export default Badges