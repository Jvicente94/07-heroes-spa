import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroePage = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();
  
  const hero = getHeroById(heroId);

  const onNavigateBack = () => {
    return navigate(-1);
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  
  return (
   <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/${heroId}.jpg`}  alt={ hero.superhero } className="img-thumbnail" />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
           <li className="list-group-item"><b>Alter Ego: </b> { hero.alter_ego } </li>
           <li className="list-group-item"><b>Editorial: </b> { hero.publisher } </li>
           <li className="list-group-item"><b>Primera aparición: </b> { hero.first_appearance } </li>
          </ul>
          <h5 className="mt-3">Carácteres</h5>
          <p>{ hero.characters }</p>

          <button className="btn btn-outline-primary" onClick={ onNavigateBack }>Volver</button>
      </div>
   </div>
  )
}
