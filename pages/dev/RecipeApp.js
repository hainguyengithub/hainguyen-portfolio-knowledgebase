
import { useState } from "react";
import styles from "./RecipeApp.module.css";

const credential = {
  "api": "edamam",
  "applicationID": "1c074f1d",
  "applicationKey": "13bbcfb4a6df52dcb87731235fe3c752"
};

const DIET_TYPES = [
  {
    id: 'balanced',
    label: 'Balanced',
  },
  {
    id: 'high-fiber',
    label: 'High-fiber',
  },
  {
    id: 'high-protein',
    label: 'High-protein',
  },
  {
    id: 'low-carb',
    label: 'Low-carb',
  },
  {
    id: 'low-fat',
    label: 'Low-fat',
  },
  {
    id: 'low-sodium',
    label: 'Low-sodium',
  },
];

export default function RecipeApp() {
  const [minNumberOfIngredients, setMinNumberOfIngredients] = useState(1);
  const [maxNumberOfIngredients, setMaxNumberOfIngredients] = useState(10);
  const [dietTypes, setDietTypes] = useState([]);
  const [healthType, setHealthType] = useState('');
  const [cuisineType, setCuisineType] = useState('');
  const onDietTypesChange = (event) => {
    const options = [...event.target.selectedOptions];
    const values = options.map(option => option.value);
    setDietTypes(values);
  };
  const grabRecipes = async () => {
    const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=1c074f1d&app_key=13bbcfb4a6df52dcb87731235fe3c752&diet=high-protein&health=alcohol-free&cuisineType=Asian&mealType=Lunch&dishType=Main%20course&imageSize=REGULAR&random=true');
    const result = await response.json();
    console.log(result);
  };
  return <div id={styles.root}>
    <h1>Recipe App</h1>
    {/* Filter: number of ingredients */}
    <div>
      <label htmlFor="minNumberOfIngredients">Minimum number of ingredients</label>
      <input type="number" name="minNumberOfIngredients" min="1" placeholder="1" />
      <label htmlFor="maxNumberOfIngredients">Maximum number of ingredients</label>
      <input type="number" name="maxNumberOfIngredients" max="20" placeholder="10" />
    </div>
    {/* Filter: diet label/type */}
    <div>
      <label htmlFor="dietType">Diet type</label>
      <select id="dietType" multiple={true} defaultValue={dietTypes} onChange={event => {onDietTypesChange(event)} }>
        {DIET_TYPES.map(each => <option 
          key={each.id} 
          value={each.id} 
          label={each.label} />
        )}
      </select>
    </div>
    {/* Filter: health label/type */}
    {/* <div>
      <label htmlFor="healthType">Health type:</label>
      <select multiple={true} className="parameter" name="healthType" id="healthType">
        <option value="alcohol-cocktail"> alcohol-cocktail  </option>
        <option value="alcohol-free"> alcohol-free  </option>
        <option value="celery-free"> celery-free  </option>
        <option value="crustacean-free"> crustacean-free  </option>
        <option value="dairy-free"> dairy-free  </option>
        <option value="DASH"> DASH  </option>
        <option value="egg-free"> egg-free  </option>
        <option value="fish-free"> fish-free  </option>
        <option value="fodmap-free"> fodmap-free  </option>
        <option value="gluten-free"> gluten-free  </option>
        <option value="immuno-supportive"> immuno-supportive  </option>
        <option value="keto-friendly"> keto-friendly  </option>
        <option value="kidney-friendly"> kidney-friendly  </option>
        <option value="kosher"> kosher  </option>
        <option value="low-fat-abs"> low-fat-abs  </option>
        <option value="low-potassium"> low-potassium  </option>
        <option value="low-sugar"> low-sugar  </option>
        <option value="lupine-free"> lupine-free  </option>
        <option value="Mediterranean"> Mediterranean  </option>
        <option value="mollusk-free"> mollusk-free  </option>
        <option value="mustard-free"> mustard-free  </option>
        <option value="no-oil-added"> no-oil-added  </option>
        <option value="paleo"> paleo  </option>
        <option value="peanut-free"> peanut-free  </option>
        <option value="pescatarian"> pescatarian  </option>
        <option value="pork-free"> pork-free  </option>
        <option value="red-meat-free"> red-meat-free  </option>
        <option value="sesame-free"> sesame-free  </option>
        <option value="shellfish-free"> shellfish-free  </option>
        <option value="soy-free"> soy-free  </option>
        <option value="sugar-conscious"> sugar-conscious  </option>
        <option value="sulfite-free"> sulfite-free  </option>
        <option value="tree-nut-free"> tree-nut-free  </option>
        <option value="vegan"> vegan  </option>
        <option value="vegetarian"> vegetarian  </option>
        <option value="wheat-free"> wheat-free  </option>
      </select>
    </div> */}
    {/* Filter: cuisine type */}
    {/* <div>
      <label htmlFor="cuisineType">Cuisine type</label>
      <select multiple={true} className="parameter " name="cuisineType" id="cuisineType">
        <option value="American"> American  </option>
        <option value="Asian"> Asian  </option>
        <option value="British"> British  </option>
        <option value="Caribbean"> Caribbean  </option>
        <option value="Central Europe"> Central Europe  </option>
        <option value="Chinese"> Chinese  </option>
        <option value="Eastern Europe"> Eastern Europe  </option>
        <option value="French"> French  </option>
        <option value="Indian"> Indian  </option>
        <option value="Italian"> Italian  </option>
        <option value="Japanese"> Japanese  </option>
        <option value="Kosher"> Kosher  </option>
        <option value="Mediterranean"> Mediterranean  </option>
        <option value="Mexican"> Mexican  </option>
        <option value="Middle Eastern"> Middle Eastern  </option>
        <option value="Nordic"> Nordic  </option>
        <option value="South American"> South American  </option>
        <option value="South East Asian"> South East Asian  </option>
      </select>
    </div> */}
    {/* Button */}
    <button onClick={() => {grabRecipes()}}>Search</button>
  </div>;
}

// https://api.edamam.com/api/recipes/v2?type=public&app_id=1c074f1d&app_key=13bbcfb4a6df52dcb87731235fe3c752&diet=high-protein&health=alcohol-free&cuisineType=Asian&mealType=Lunch&dishType=Main%20course&imageSize=REGULAR&random=true