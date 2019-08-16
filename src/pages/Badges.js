import React from 'react'
import confLogo from '../images/badge-header.svg'
import './styles/Badges.css'
import BadgesList from '../componentes/BadgesList'
import { Link } from 'react-router-dom'
import api from '../api'
import PageLoading from '../componentes/PageLoading'
import PageError from '../componentes/PageError'
import MiniLoader from '../componentes/MiniLoader'

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
        this.intervalId = setInterval(this.fetchData,5000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)

    }
    

    render() {

        if(this.state.loading === true && this.state.data === undefined ){ //o !this.state.loading
            return (<PageLoading />)
        } 

        if(this.state.error){
            return (<PageError error={this.state.error}/>)
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
                    {this.state.loading && <MiniLoader/>}

                </div>

                

            </React.Fragment>

        )
    }

}

export default Badges