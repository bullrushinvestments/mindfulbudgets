import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  beforeEach(() => {
    render(<DesignArchitectureComponent />);
  });

  it('renders the component with initial loading state', async () => {
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/failed to load/i));
  });

  it('renders fetched data correctly after loading', async () => {
    const mockData = { /* Mocked Data */ };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/data loaded/i));
  });

  it('handles user interactions such as clicking a button', async () => {
    const mockFunction = jest.fn();
    render(
      <DesignArchitectureComponent
        onButtonClick={mockFunction}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockFunction).toHaveBeenCalled();
  });

  it('ensures accessibility features are properly implemented', () => {
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
  });

  it('tests edge cases such as empty data response', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({});
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/no data available/i));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API and other dependencies
jest.mock('./api', () => ({
  fetchData: jest.fn(),
}));

describe('Design Architecture Component Tests', () => {
  beforeEach(() => {
    render(<DesignArchitectureComponent />);
  });

  it('renders the component with initial loading state', async () => {
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays error message when fetching data fails', async () => {
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/failed to load/i));
  });

  it('renders fetched data correctly after loading', async () => {
    const mockData = { /* Mocked Data */ };
    (fetchData as jest.Mock).mockResolvedValueOnce(mockData);
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/data loaded/i));
  });

  it('handles user interactions such as clicking a button', async () => {
    const mockFunction = jest.fn();
    render(
      <DesignArchitectureComponent
        onButtonClick={mockFunction}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    expect(mockFunction).toHaveBeenCalled();
  });

  it('ensures accessibility features are properly implemented', () => {
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toHaveAttribute('aria-label');
    expect(button).toBeEnabled();
  });

  it('tests edge cases such as empty data response', async () => {
    (fetchData as jest.Mock).mockResolvedValueOnce({});
    render(<DesignArchitectureComponent />);
    await waitFor(() => screen.getByText(/no data available/i));
  });
});