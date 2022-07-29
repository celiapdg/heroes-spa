import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

    // si el valor de heroes fuera muy grande podria merecer la pena memorizar esto
    const heroes = useMemo(() => getHeroesByPublisher(publisher));

    return (
        <div className="row rows-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
            {heroes.map((hero) => (
                <HeroCard
                    key={hero.id}
                    // mandamos cada propiedad con el spread
                    {...hero} />))}
        </div>
    )
}
