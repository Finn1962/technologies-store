import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import RadioInput from "./RadioInput";

describe("RadioInput Komponente", () => {
  it("sollte die passende Option basierend auf currentPage anzeigen", () => {
    render(
      <MemoryRouter>
        <RadioInput />
      </MemoryRouter>,
    );

    const homeRadio = screen.getByLabelText(/home/i);
    const shopRadio = screen.getByLabelText(/shop/i);

    expect(homeRadio).toHaveAttribute("data-active", "true");
    expect(shopRadio).not.toHaveAttribute("data-active", "true");
  });

  it("sollte setCurrentPage aufrufen, wenn eine Option ausgewählt wird", async () => {
    const mockClickObserver = vi.fn();
    render(
      <MemoryRouter>
        <RadioInput />
      </MemoryRouter>,
    );

    const shopRadio = screen.getByLabelText(/shop/i);
    await userEvent.click(shopRadio);

    expect(mockClickObserver).toHaveBeenCalledOnce();
  });
});
