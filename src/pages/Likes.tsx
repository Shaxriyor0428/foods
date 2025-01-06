import { useSelector } from "react-redux";
import Products from "../components/Products";
import { RootState } from "../redux";

const Likes = () => {
  const wishlist = useSelector((s: RootState) => s.wishlist.value);
  return <Products data={wishlist} title="Likes" />;
};

export default Likes;
