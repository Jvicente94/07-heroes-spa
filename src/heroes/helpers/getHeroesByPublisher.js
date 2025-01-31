
import { heroes } from '../data/heroes';


export const getHeroesByPublisher = (publisher) => {

    const ValidPublishers = ['DC Comics', 'Marvel Comics'];
   
    if (!ValidPublishers.includes(publisher)) {
        throw new Error(`Publisher "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);

}