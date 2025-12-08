import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders loading state when data is fetching', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message when there is an error', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'error',
      data: null,
      error: new Error('Failed to fetch data'),
    });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/Failed to fetch data/i)).toBeInTheDocument();
  });

  test('renders product list when data is available', async () => {
    const mockData = [
      { id: '1', name: 'Product A', price: '$9.99' },
      { id: '2', name: 'Product B', price: '$14.99' },
    ];
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'success',
      data: mockData,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const productNames = await screen.findAllByRole('heading', { name: /Product A/i, level: 2 });
    expect(productNames.length).toBe(1);
    const prices = await screen.findAllByText(/$9.99/i);
    expect(prices.length).toBe(1);
  });

  test('handles user interaction with product items', async () => {
    const mockData = [
      { id: '1', name: 'Product A', price: '$9.99' },
      { id: '2', name: 'Product B', price: '$14.99' },
    ];
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'success',
      data: mockData,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const productA = await screen.findByRole('heading', { name: /Product A/i, level: 2 });
    fireEvent.click(productA);
    expect(await screen.findByText(/Details for Product A/i)).toBeInTheDocument();
  });

  test('tests accessibility features', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'success',
      data: [
        { id: '1', name: 'Product A', price: '$9.99' },
        { id: '2', name: 'Product B', price: '$14.99' },
      ],
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const productA = await screen.findByRole('heading', { name: /Product A/i, level: 2 });
    expect(productA).toHaveAttribute('aria-label', 'Product A');
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    fireEvent.click(productA);
    expect(await screen.findByText(/Details for Product A/i)).toBeInTheDocument();
  });

  test('mocks external dependencies correctly', async () => {
    const mockData = [
      { id: '1', name: 'Product A', price: '$9.99' },
      { id: '2', name: 'Product B', price: '$14.99' },
    ];
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'success',
      data: mockData,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const productA = await screen.findByRole('heading', { name: /Product A/i, level: 2 });
    fireEvent.click(productA);
    expect(useExternalData).toHaveBeenCalled();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  beforeEach(() => {
    (useExternalData as jest.Mock).mockClear();
  });

  test('renders loading state when data is fetching', async () => {
    (useExternalData as jest.Mock).mockReturnValue({ status: 'loading' });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/Loading.../i)).toBeInTheDocument();
  });

  test('displays error message when there is an error', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'error',
      data: null,
      error: new Error('Failed to fetch data'),
    });
    render(<CoreFunctionalityComponent />);
    expect(await screen.findByText(/Failed to fetch data/i)).toBeInTheDocument();
  });

  test('renders product list when data is available', async () => {
    const mockData = [
      { id: '1', name: 'Product A', price: '$9.99' },
      { id: '2', name: 'Product B', price: '$14.99' },
    ];
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'success',
      data: mockData,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const productNames = await screen.findAllByRole('heading', { name: /Product A/i, level: 2 });
    expect(productNames.length).toBe(1);
    const prices = await screen.findAllByText(/$9.99/i);
    expect(prices.length).toBe(1);
  });

  test('handles user interaction with product items', async () => {
    const mockData = [
      { id: '1', name: 'Product A', price: '$9.99' },
      { id: '2', name: 'Product B', price: '$14.99' },
    ];
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'success',
      data: mockData,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const productA = await screen.findByRole('heading', { name: /Product A/i, level: 2 });
    fireEvent.click(productA);
    expect(await screen.findByText(/Details for Product A/i)).toBeInTheDocument();
  });

  test('tests accessibility features', async () => {
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'success',
      data: [
        { id: '1', name: 'Product A', price: '$9.99' },
        { id: '2', name: 'Product B', price: '$14.99' },
      ],
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const productA = await screen.findByRole('heading', { name: /Product A/i, level: 2 });
    expect(productA).toHaveAttribute('aria-label', 'Product A');
    fireEvent.keyDown(document.body, { key: 'ArrowRight' });
    fireEvent.click(productA);
    expect(await screen.findByText(/Details for Product A/i)).toBeInTheDocument();
  });

  test('mocks external dependencies correctly', async () => {
    const mockData = [
      { id: '1', name: 'Product A', price: '$9.99' },
      { id: '2', name: 'Product B', price: '$14.99' },
    ];
    (useExternalData as jest.Mock).mockReturnValue({
      status: 'success',
      data: mockData,
      error: null,
    });
    render(<CoreFunctionalityComponent />);
    const productA = await screen.findByRole('heading', { name: /Product A/i, level: 2 });
    fireEvent.click(productA);
    expect(useExternalData).toHaveBeenCalled();
  });
});