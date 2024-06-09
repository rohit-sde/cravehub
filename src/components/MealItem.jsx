import currencyFormatter from "../Util/formatting";
import Button from "../ui/Button";

function MealItem({ meal }) {
    return (
        <li className="meal-item">
            <article>
                <img
                    src={`http://localhost:1000/${meal.image}`}
                    alt={meal.name}
                />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">
                        {currencyFormatter.format(meal.price)}
                    </p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p>
                    <Button>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}

export default MealItem;
