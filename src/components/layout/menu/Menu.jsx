import styles from "./menu.module.css";
import { Button } from "@components/UI/button/Button.jsx";
import { ProductCard } from "@components/features/productCard/ProductCard.jsx";
import { useEffect, useState } from "react";
import { getMeals } from "../../../utils/api.jsx";

export const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("Dessert");

  const categories = ["Dessert", "Dinner", "Breakfast"];
  useEffect(() => {
    getMeals().then(setMeals);
  }, []);

  const filteredMeals = meals.filter(
    (meal) => meal.category === activeCategory,
  );

  const visibleMeals = filteredMeals.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prevState) => prevState + 6);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(6);
  };

  return (
    <div className={styles.menu}>
      <div className={styles.navSection}>
        <h1 className={styles.title}>Browse our menu</h1>
        <p className={styles.navSectionText}>
          Use our menu to place an order online, or
          <span className={styles.highlight}> phone</span> our store
          <br /> to place a pickup order. Fast and fresh food.
        </p>
      </div>
      <div className={styles.cardsSection}>
        <div className={styles.categorySectionControls}>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "primary" : "inactive"}
              onClick={() => {
                handleCategoryChange(category);
              }}
              className={styles.categorySectionControlsBtn}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className={styles.cards}>
          {visibleMeals.map((meal) => (
            <ProductCard
              key={meal.id}
              imgUrl={meal.img}
              name={meal.meal}
              price={meal.price}
              description={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              }
            />
          ))}
        </div>
        <div className={styles.seeMore}>
          {visibleCount < filteredMeals.length && (
            <Button
              onClick={handleSeeMore}
              className={styles.categorySectionControlsBtn}
            >
              See more
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
