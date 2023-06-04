//Needs to check whats in the cart and list out the prices as well a delivery fee (maybe based on the customers location)
// Needs to check to see if the customer is logged in
//Either a pop up or redirect to a new page to get the address the items should be sent to.

import { Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import storeItems from "../data/items.json"
import { CartItem } from "../components/CartItem"

export function Checkout() {
    const  { closeCart, cartItems } = useShoppingCart()
    return (
        <>
    <h1>Checkout</h1>
    <Stack gap={3}>
    {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
          <div className="ms-auto fw-bold fs-5">
            + Tax{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
    </Stack>
    </>
    )
}