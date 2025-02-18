import { useSelector } from "react-redux";
import Products from "../components/Products";
import { RootState } from "../redux";

const Likes = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.value);
  const reversedWishlist = [...wishlist].reverse();

  return (
    <>
      {wishlist.length > 0 ? (
        <Products data={reversedWishlist} title="Liked Foods" />
      ) : (
        <p className="text-red-500 text-xl my-6 text-center font-semibold">
          No liked foods found.
        </p>
      )}
    </>
  );
};

export default Likes;
