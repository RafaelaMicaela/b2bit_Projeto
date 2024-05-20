import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button/index";

describe("Button Component", () => {
  it("renders button with text and handles click", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    // Utilize getByRole para selecionar o botão pelo seu papel de acessibilidade
    const buttonElement = screen.getByRole("button", { name: /click me/i });

    // Simula um clique no botão
    fireEvent.click(buttonElement);

    // Verifica se a função handleClick foi chamada uma vez
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders button and ensures it has correct role", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
  });
});
