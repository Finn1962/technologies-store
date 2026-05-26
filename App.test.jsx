import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

describe("App Integration / Routing Test", () => {
  it("sollte standartmäßig die Home-Seite mit Teaser-Text anzeigen", () => {
    render(<App />);

    const teaserText = screen.getByText(/Dein Onlinestore für/i);
    expect(teaserText).toBeInTheDocument();
  });

  it("sollte die Home-Page ausblenden, wenn auf den Shop gewechselt wird", async () => {
    render(<App />);

    const shopRadio = screen.getByLabelText(/shop/i);

    await userEvent.click(shopRadio);

    const teaserText = screen.queryByText(/Dein Onlinestore für/i);
    expect(teaserText).not.toBeInTheDocument();
  });

  it("sollte die Home-Page ausblenden, wenn auf den Warenkorb gewechselt wird", async () => {
    render(<App />);

    const cartButton = screen.getByLabelText(/Warenkorb/i);

    await userEvent.click(cartButton);

    const teaserText = screen.queryByText(/Dein Onlinestore für/i);
    expect(teaserText).not.toBeInTheDocument();
  });
});
