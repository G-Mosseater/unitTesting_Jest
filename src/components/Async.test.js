import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if requests succeeds", async () => {
    //create mock function to override the main fetch function
    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }], //return an array since data is an array in the fetch function
    });

    render(<Async />);
    //findByRole returns a promise, needs to be awaited - async function
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
