const CartItems = () => {
  return (
    <div>
      <div className="flex">
        <div className="h-[180px] bg-[#f2f2f2]">
          <img src="" alt="cart" />
        </div>
        <div className="flex flex-col ml-3 w-36">
          <h3 className="my-2">title</h3>
          <h2>50 EGP</h2>
          <button className="w-24">Remove</button>
        </div>
      </div>
      <div>
        <span>Quantity</span>
        <form>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default CartItems;
