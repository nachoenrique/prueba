import React from 'react'
import astro from '../images/astronauts.svg'
import pcl from '../images/platziconf-logo.svg'
import stars from '../images/stars.svg'
import header from '../images/badge-header.svg'
import './styles/BadgeNew.css'
import './styles/Badges.css'
import './styles/Home.css'



class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div >
                   <div className="container">
                       <div className="row">
                           <div className="col-6">
                               <img src={pcl} alt="platziconf-logo"/>
                               <h1>Print Your Badges</h1>
                           </div>
                       </div>
                   </div>
                </div>
            </React.Fragment>
        )
    }

}

export default Home