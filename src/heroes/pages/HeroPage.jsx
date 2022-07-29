import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
    const { heroId } = useParams();
    // se ejecuta con cualquier cambio en el state
    // en este caso no va a cambiar
    // no hace falta memorizar?
    // lo vamos a hacer para saber cómo se haría bien
    // useMemo memoriza un valor, useCallback una función
    const hero = useMemo(() => getHeroById(heroId), [heroId]);

    const navigate = useNavigate();

    const handleNavigateBack = () => {
        navigate(-1)
    }

    if (!hero) {
        return <Navigate to="/marvel" />
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`/assets/heroes/${heroId}.jpg`}
                    alt={hero.superhero}
                    className="img-thumbnail animate__animated animate__bounceInLeft" />
            </div>
            <div className="col-8  animate__animated animate__flipInX">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-outline-primary"
                    onClick={handleNavigateBack}>Back</button>

            </div>
        </div>
    )
}
