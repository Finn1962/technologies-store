import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioInput from "./RadioInput";

describe("RadioInput Komponente", () => {
  it("sollte die passende Option basierend auf currentPage anzeigen", () => {
    render(<RadioInput currentPage="home" setCurrentPage={() => {}} />);

    const homeRadio = screen.getByLabelText(/home/i);
    const shopRadio = screen.getByLabelText(/shop/i);

    expect(homeRadio).toBeChecked();
    expect(shopRadio).not.toBeChecked();
  });

  it("sollte setCurrentPage aufrufen, wenn eine Option ausgewählt wird", async () => {
    const mockSetCurrentPage = vi.fn();
    render(
      <RadioInput currentPage="home" setCurrentPage={mockSetCurrentPage} />,
    );

    const shopRadio = screen.getByLabelText(/shop/i);
    await userEvent.click(shopRadio);

    expect(mockSetCurrentPage).toHaveBeenCalledWith("shop");
  });
});
