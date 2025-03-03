import App from './App'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })
})