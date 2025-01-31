/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const CharactersByHero = ({alter_ego, characters}) => {

    

    return ( alter_ego === characters ) ? (<></>) : ( <p>{ characters }</p> )
    

}


export const HeroeCard = ({ id,
                            superhero,
                            alter_ego,
                            first_appearance,
                            characters }) => {


 const heroeImgUrl = `/assets/${ id }.jpg`;

 
  return (
    <div className="col animate__animated animate__bounce animate__delay-2s">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={heroeImgUrl} className="card-img" alt={ superhero } />
                </div>

                <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            {
                            
                                <CharactersByHero characters={ characters } alter_ego={ alter_ego }/>
                            
                            }
                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                Más...
                            </Link>
                        </div>
                </div>    
            </div>    
        </div>
    </div>
  )
}
