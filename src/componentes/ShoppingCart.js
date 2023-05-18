import React, { useState } from "react";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState(0);

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setItemQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setItemPrice(event.target.value);
  };

  const addItem = () => {
    if (itemName.trim() !== "" && itemPrice > 0) {
      const newItem = {
        id: Date.now(),
        name: itemName,
        quantity: parseInt(itemQuantity),
        price: parseFloat(itemPrice)
      };
      setCartItems([...cartItems, newItem]);
      setItemName("");
      setItemQuantity(1);
      setItemPrice(0);
    }
  };

  const deleteItem = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
    return totalPrice.toFixed(2);
  };

  return (
    <div className="bg-danger">
      <h2>Carrito de Compras</h2>
      <div>
        <label>Producto:</label>
        <input
          type="text"
          placeholder="Nombre del producto"
          value={itemName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        <label>Cantidad:</label>
        <input
          type="number"
          min="1"
          value={itemQuantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          min="0"
          step="0.01"
          value={itemPrice}
          onChange={handlePriceChange}
        />
      </div>
      <button onClick={addItem}>Agregar al carrito</button>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${item.price.toFixed(2)}</span>
            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total: ${getTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;