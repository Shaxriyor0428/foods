import { FC, ReactNode, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IProduct } from "../types";
import { saveWishlist } from "../redux/slices/wishlist-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import Modal from "./Modal";
import { FaRegHeart } from "react-icons/fa";

interface ProductsProps {
  data: IProduct[] | null;
  title: string;
}

const Products: FC<ProductsProps> = ({ data, title }) => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

  const users: IProduct[] = useSelector(
    (state: RootState) => state.wishlist.value
  );
  const dispatch = useDispatch();

  const handleLike = (prod: IProduct) => {
    dispatch(saveWishlist(prod));
  };

  const handleImage = (product: IProduct) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const productItems: ReactNode = data?.map((prod: IProduct) => (
    <div
      key={prod.id}
      className=" shadow-md p-4 rounded-lg bg-white hover:shadow-lg transition-shadow"
    >
      <img
        onClick={() => handleImage(prod)}
        src={prod.image}
        alt={prod.name}
        className="w-full object-cover rounded-t-lg cursor-pointer"
      />
      <div className="mt-2">
        <h1 className="font-semibold text-lg line-clamp-1">{prod.name}</h1>
        <p className="text-gray-600">Rating: {prod.rating} ⭐</p>
      </div>
      <button
        onClick={() => handleLike(prod)}
        className="mt-4 flex items-center justify-center text-2xl"
      >
        {users.some((item) => item.id === prod.id) ? (
          <FaHeart className="text-red-500"/>
        ) : (
          <FaRegHeart />
        )}
      </button>
    </div>
  ));

  return (
    <div className="my-6 max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productItems}
      </div>

      {open && selectedProduct && (
        <Modal close={() => setOpen(false)}>
          <div className="flex relative flex-col md:flex-row p-6 bg-white rounded-lg container">
            <span
              onClick={() => setOpen(false)}
              className=" absolute top-4 right-4 cursor-pointer text-xl "
            >
              X
            </span>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full md:w-1/2 h-auto object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
            />

  
            <div className="md:w-1/2">
              <h2 className="text-xl font-bold mb-2">{selectedProduct.name}</h2>
              <p>
                <strong>Rating:</strong> {selectedProduct.rating} ⭐
              </p>
              <p>
                <strong>Difficulty:</strong> {selectedProduct.difficulty}
              </p>
              <p>
                <strong>Cuisine:</strong> {selectedProduct.cuisine}
              </p>
              <p>
                <strong>Calories per Serving:</strong>{" "}
                {selectedProduct.caloriesPerServing}
              </p>
              <p>
                <strong>Prep Time:</strong> {selectedProduct.prepTimeMinutes}{" "}
                minutes
              </p>
              <p>
                <strong>Cook Time:</strong> {selectedProduct.cookTimeMinutes}{" "}
                minutes
              </p>
              <p>
                <strong>Ingredients:</strong>
              </p>
              <ul className="list-disc pl-5">
                {selectedProduct.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <p>
                <strong>Instructions:</strong>
              </p>
              <ol className="list-decimal pl-5">
                {selectedProduct.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Products;
