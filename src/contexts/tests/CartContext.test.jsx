import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext } from "react";
import CartProvider, { CartContext } from "../CartContext.jsx";

describe("Testet die Cart-Funktionen", () => {
  function TestInterface() {
    const {
      addProductToCart,
      removeProductFromCart,
      changeQuantityInCart,
      resetCart,
      cart,
    } = useContext(CartContext);
    return (
      <>
        <div data-testid="cart-state">{JSON.stringify(cart)}</div>
        <button
          data-testid="button_one"
          onClick={() =>
            addProductToCart({ product: { id: 121 }, quantity: 1 })
          }
        ></button>
        <button
          data-testid="button_two"
          onClick={() =>
            addProductToCart({ product: { id: 122 }, quantity: 5 })
          }
        ></button>
        <button
          data-testid="button_three"
          onClick={() =>
            removeProductFromCart({ product: { id: 121 }, quantity: 2 })
          }
        ></button>
        <button
          data-testid="button_four"
          onClick={() =>
            removeProductFromCart({ product: { id: 122 }, quantity: 3 })
          }
        ></button>
        <button data-testid="button_five" onClick={() => resetCart()}></button>
        <button
          data-testid="button_six"
          onClick={() =>
            changeQuantityInCart({ product: { id: 122 }, quantity: 5 })
          }
        ></button>
      </>
    );
  }

  it("Testet alle Funktionen des Carts", async () => {
    render(
      <CartProvider>
        <TestInterface />
      </CartProvider>,
    );

    const user = userEvent.setup();

    const cartState = screen.getByTestId("cart-state");

    const button_one = screen.getByTestId("button_one");
    const button_two = screen.getByTestId("button_two");
    const button_three = screen.getByTestId("button_three");
    const button_four = screen.getByTestId("button_four");
    const button_five = screen.getByTestId("button_five");
    const button_six = screen.getByTestId("button_six");

    await user.click(button_one); //id: 121, 1mal hinzugefügt
    await user.click(button_one); //id: 121, 1mal hinzugefügt
    await user.click(button_two); //id: 122, 5mal hinzugefügt
    await user.click(button_three); //id: 121, 2mal entfernt
    await user.click(button_four); //id: 122, 3mal entfernt

    expect(JSON.parse(cartState.textContent)).toEqual([
      { product: { id: 122 }, quantity: 2 },
    ]);

    await user.click(button_four); //id: 122, 3mal entfernt

    expect(JSON.parse(cartState.textContent)).toEqual([
      { product: { id: 122 }, quantity: 2 },
    ]);

    await user.click(button_six); //id: 122, auf anzahl 5 setzen

    expect(JSON.parse(cartState.textContent)).toEqual([
      { product: { id: 122 }, quantity: 5 },
    ]);

    await user.click(button_five); //Warenkorb zurücksetzen

    expect(JSON.parse(cartState.textContent)).toEqual([]);
  });
});
