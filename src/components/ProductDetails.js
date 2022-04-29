import axios from "axios";
import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productsActions";

const ProductDetails = () => {
  const { productId } = useParams();
  let product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductDetail = async (id) => {
      const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        
      dispatch(selectedProduct(response.data));
    };

    if (productId && productId !== "") fetchProductDetail(productId);
return () => {
    dispatch(removeSelectedProduct());
}


  }, [dispatch, productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="ui active centered inline loader"> </div>
      ) : (
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} alt={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label" href="#/">Rs.{price*70}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
