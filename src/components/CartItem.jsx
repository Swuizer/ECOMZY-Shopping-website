import {MdDelete} from "react-icons/md"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Remove");
  }

  return (
      <div className="w-full lg:w-[47vw] flex flex-col lg:flex-row mt-12 "> 
          <div className="h-[240px] w-[200px] mb-10 mx-12 self-center">
            <img src={item.image} alt="cartImage" className="h-full w-full"/>
          </div>

          <div className="flex flex-col gap-5 w-[90%] mx-auto lg:mx-0 lg:w-[50%]">
            <h1 className="text-xl font-semibold text-slate-700">{item.title}</h1>
            <h1 className="opacity-60">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
            <div className="flex justify-between w-[90%]">
              <p className="text-green-600 font-bold text-lg">${String(item.price).split(".").slice(0, 1)}</p>
              <div
              onClick={removeFromCart}
              className="bg-red-300 text-red-800 flex justify-center items-center 
              rounded-full w-10 h-10 hover:text-white hover:bg-red-400">
                <MdDelete/>
              </div>
            </div>
          </div>
      </div>
  );
};

export default CartItem;
