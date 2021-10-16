import { useState } from "react";
import { useCart } from "../../providers/cart";

function Cart() {
  const { cartProducts } = useCart();

  const [costumer, setCostumer] = useState({
    name: "",
    address: "",
  });

  const handleInput = (event) => {
    setCostumer((previusState) => ({
      ...previusState,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Olá ${costumer.name}, seu pedido está sendo preparado`);

    console.log("Lista de produtos comprados", cartProducts);
  };

  return (
    <>
      <h3>Cart</h3>

      {cartProducts.map((p) => (
        <div key={p.id}>
          <span>{p.name}</span>
          <span>{p.price}</span>
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name </label>
          <input
            id="name"
            value={costumer.name}
            onChange={handleInput}
            type="text"
          />
        </div>

        <div>
          <label htmlFor="address"> Address </label>
          <input
            id="address"
            value={costumer.address}
            onChange={handleInput}
            type="text"
          />
        </div>

        <button type="submit">Purchase</button>
      </form>
    </>
  );
}

export default Cart;
