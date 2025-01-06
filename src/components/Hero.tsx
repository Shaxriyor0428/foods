import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/slices/counter-slice";
import { RootState } from "../redux";

const Hero = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p> Hello {count} </p>
      <button onClick={() => dispatch(increment())} className="">
        Increment
      </button>
      <button onClick={() => dispatch(decrement())} className="">
        Decrement
      </button>
    </div>
  );
};

export default Hero;
