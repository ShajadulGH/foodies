import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) =>
        meal.map((item) => (
          <li key={item.id}>
            <MealItem {...item} />
          </li>
        ))
      )}
    </ul>
  );
}
