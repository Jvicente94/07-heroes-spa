import { getHeroesByPublisher } from "../helpers";
import PropTypes from 'prop-types';
import { HeroeCard } from "./HeroeCard";
import { useMemo } from "react";
export const HeroesList = ({ publisher }) => {
  
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row roe-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( hero => (
                    <HeroeCard key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>    
    )
}

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired
};
