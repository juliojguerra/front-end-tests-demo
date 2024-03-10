import UserForm from "@/app/user-form";
import { render, screen } from "@testing-library/react";

test("it shows two inputs and a button", () => {
  render(<UserForm />);

  // manipulate component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
