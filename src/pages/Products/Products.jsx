import { useState } from "react";
// import Footer from "../../sections/Footer/Footer";
import Hero from "../../sections/Hero/Hero";
import Navigation from "../../sections/Navigation/Navigation";
import ProductsSection from "../../sections/ProductsSection/ProductsSection";
import "./Products.css";
import products from "../../db/data.js";
import ProductCard from "../../components/ProductCard/ProductCard";

function Products() {
  // Initial value for category
  let [selectedCategory, setSelectedCategory] = useState(null);

  // Change category on click
  let handleClick = (event) => {
    setSelectedCategory(event.currentTarget.value);
  };

  function filteredProducts(products, selectedCategory) {
    let filteredProducts = products;

    // Filter and return only products with the selected category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category.toLowerCase() === selectedCategory,
      );
    }

    // Return Product card with filtered products
    return filteredProducts.map(
      ({ id, title, image, price, category, description }) => {
        return (
          <ProductCard
            key={id}
            title={title}
            image={image}
            price={price}
            category={category}
            description={description}
          />
        );
      },
    );
  }

  let result = filteredProducts(products, selectedCategory);

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <ProductsSection handleClick={handleClick} result={result} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Products;
