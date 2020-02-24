import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByRole } = render(<App />);
  const formElement = getByRole('form')
  const tableElement = getByRole('table')
  
  expect(formElement).toBeInTheDocument();
  expect(tableElement).toBeInTheDocument();
});
