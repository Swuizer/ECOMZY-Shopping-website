import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {
        cart.length > 0 ?
        (<div className="flex flex-col lg:flex-row w-full lg:max-w-6xl lg:mx-auto">
          {/*Left Cart Section */}
          <div>
            {
              cart.map( (item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
            {/* Right Section */}
          <div className="flex items-center h-[90vh] w-[80%] mx-auto lg:mx-0 lg:w-[30vw] lg:fixed lg:right-[10vw] lg:top-[6vh]">
            <div className="flex flex-col justify-between h-[60vh] w-full">
                
              <div>
                <div className="text-xl text-green-800 font-semibold uppercase">Your cart</div>
                <div className="text-5xl uppercase text-green-700 font-bold">Summary</div>
                <p className="text-slate-700 font-semibold text-xl">
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
                <p className="text-xl font-semibold text-slate-700">Total Amount: 
                  <span className="font-bold text-black">${totalAmount}</span>
                </p>
                <button className="bg-green-700 w-full py-3 text-xl font-semibold text-white rounded-md">
                  Checkout Now
                </button>
              </div>

            </div>
          </div>
        </div>) :
        (<div className="flex flex-col justify-center items-center h-screen gap-4 -mt-11">
          <h1 className="text-xl font-semibold text-slate-700">Your cart is empty</h1>
          <Link to={"/"}>
            <button className="bg-green-600 text-white font-semibold text-xl py-3 px-6 
            rounded-md border-2 transition-all duration-700 hover:bg-white hover:text-green-600 hover:border-green-600 uppercase">
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  );
};

export default Cart;
