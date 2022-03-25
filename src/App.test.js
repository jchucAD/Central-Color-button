import { render, screen } from '@testing-library/react';
import App from './App';

test('Nom test 1 : renders learn react link', () => {
  render(<App />)
  expect(screen.getByText(/learn react/i)).toBeInTheDocument()
})

test('Mon test 2: full app rendering/navigating', () => {
  render(<App />)
  expect(screen.getByText(/save/i)).toBeInTheDocument()
  // userEvent.click(screen.getByText(/about/i))
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument()
})
