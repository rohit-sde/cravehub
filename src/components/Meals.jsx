import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";
import useHttp from "./http hook/useHttp.js";

const requestConfig = {};

export default function Meals() {
    const {
        data: loadedMeals,
        isLoading,
        error,
    } = useHttp("http://localhost:1001/meals", requestConfig, []);

    if (isLoading) {
        return (
            <p class className="center">
                Fetching meals...
            </p>
        );
    }

    // if(!data) {
    //     return<p>No meals found</p>
    // }
    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <MealItem key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}
