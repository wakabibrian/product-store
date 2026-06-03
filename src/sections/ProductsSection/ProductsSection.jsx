// React Icons
import { RiShoppingBag4Line } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoShirtOutline } from "react-icons/io5";
import { PiSneaker } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { GiWeightLiftingUp } from "react-icons/gi";

import FilterButton from "../../components/FilterButton/FilterButton";
import "./ProductsSection.css";

function ProductsSection({ handleClick, result }) {
  return (
    <section className="section-products">
      <div className="products-container">
        {/* ==============Section Title=========== */}
        <div className="products-section-header">
          <div className="shopping-con">
            <RiShoppingBag4Line />
          </div>
          <div className="products-section-title">
            <h2>Shop By Category</h2>
            <p>Explore top products across our most popular categories.</p>
          </div>
        </div>
        {/* ==============Filter Buttons=========== */}
        <div className="filter-buttons">
          <FilterButton
            handleClick={handleClick}
            value=""
            title="All"
            icon={<HiOutlineSquares2X2 />}
            active="active"
          />
          <FilterButton
            handleClick={handleClick}
            value="electronics"
            title="Electronics"
            icon={<HiOutlineComputerDesktop />}
          />
          <FilterButton
            handleClick={handleClick}
            value="fashion"
            title="Fashion"
            icon={<IoShirtOutline />}
          />
          <FilterButton
            handleClick={handleClick}
            value="shoes"
            title="Shoes"
            icon={<PiSneaker />}
          />
          <FilterButton
            handleClick={handleClick}
            value="home"
            title="Home"
            icon={<IoHomeOutline />}
          />
          <FilterButton
            handleClick={handleClick}
            value="accessories"
            title="Accessories"
            icon={<IoPricetagsOutline />}
          />
          <FilterButton
            handleClick={handleClick}
            value="sports"
            title="Sports"
            icon={<GiWeightLiftingUp />}
          />
        </div>
        {/* ==============Filtered Product List Component=========== */}
        <div className="products-list-container">{result}</div>
      </div>
    </section>
  );
}

export default ProductsSection;
