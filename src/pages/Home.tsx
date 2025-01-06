import { useEffect, useState } from "react";
import Products from "../components/Products";
import { IProduct } from "../types";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState<null | IProduct[]>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        setData(res.data.recipes);
        setLoading(false);
      })
      .catch((err) => {
        setError("Data fetching error.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-6">Loading...</div>;
  if (error)
    return <div className="text-center mt-6 text-red-500">{error}</div>;

  return <Products data={data} title="Products"/>;
};

export default Home;
