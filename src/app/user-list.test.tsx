import { render, screen, within } from "@testing-library/react";
import UserList from "./user-list";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];
  render(<UserList users={users} />);

  return {
    users,
  };
}

test("render one row per user", () => {
  // Render the component
  renderComponent();

  // Find all the rows in the table
  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr")
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  // Assertion: correct numnber of rowss in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();

  //screen.logTestingPlaygroundURL();
  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
