import styles from "./Menu.module.css";
import { Button } from "@components/UI/button/Button.js";
import { ProductCard } from "@components/features/productCard/ProductCard";
import { useState } from "react";
import { useFetch } from "@hooks/useFetch";
import { Meal } from "@types";
import { MEAL_CATEGORIES } from "../../../constants";

export const Menu = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState("Dessert");

  const categories = MEAL_CATEGORIES;

  const url = "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals";
  const { data, loading, error } = useFetch<Meal[]>(url);
  const meals = data ?? [];

  if (loading) return <div style={{ color: "var( --color-primary)" }}>Loading...</div>;
  if (error) {
    console.log(error);
    return (
      <div style={{ color: "var( --color-primary)" }}>
        Failed to fetch meals
      </div>
    );
  }

  const filteredMeals = meals.filter(
    (meal) => meal.category === activeCategory,
  );

  const visibleMeals = filteredMeals.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prevState) => prevState + 6);
  };

  const handleCategoryChange = (category: string) => {
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
