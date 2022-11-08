import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  const elContent= await screen.findByTestId("content");

  expected(elContent).toBeTruthy();

  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("Hola React")).toBeInTheDocument();


  // npm run test


  expect(linkElement).toBeInTheDocument();
});
