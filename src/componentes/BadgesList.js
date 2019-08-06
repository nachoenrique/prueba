import React from 'react'
import "./styles/Badge.css"
import './styles/BadgesList.css'
import './styles/Navbar.css'
import '../pages/styles/Badges.css'
import '../pages/styles/BadgeNew.css'
import iTuiter from './Iconos/twitter-brands.svg'


class BadgesList extends React.Component{

    render(){
        return(

            <div className="Badges__list">

                <div className="Badges__container">

                    <ul className="list-unstyled">

                        {this.props.badges.map((badge) => {
                            return(
                                <li key={badge.id} >
                                    <div >
                                        <div className="BadgesListItem">
                                            <img className="BadgesListItem__avatar" src={badge.avatarUrl} alt=""/>
                                            <ul className="list-unstyled Badges__list-Date">
                                                <li className="Badge__name font-weight-bold">{badge.firstName}{badge.lastName}</li>
                                                <span > <i class="fab fa-twitter"></i> @{badge.tuiter}</span>
                                                <p>{badge.jobTitle}</p>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}

                    </ul>

                </div>

                
                            
            </div>

        )
    }

}

export default BadgesList 