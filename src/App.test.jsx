import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('DevOpsHub Dashboard', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('renders the dashboard title', () => {
    expect(
      screen.getByRole('heading', { name: 'Deployment Dashboard' }),
    ).toBeInTheDocument()
  })

  it('displays the operational status', () => {
    expect(screen.getByText('All Systems Operational')).toBeInTheDocument()
  })

  it('renders the CI/CD Pipeline section', () => {
    expect(
      screen.getByRole('heading', { name: 'CI/CD Pipeline' }),
    ).toBeInTheDocument()
  })

  it('renders the Staging environment', () => {
    expect(
      screen.getByRole('heading', { name: 'Staging' }),
    ).toBeInTheDocument()
  })

  it('renders the Production environment', () => {
    expect(
      screen.getByRole('heading', { name: 'Production' }),
    ).toBeInTheDocument()
  })

  it('renders the Testing Results section', () => {
    expect(
      screen.getByRole('heading', { name: 'Testing Results' }),
    ).toBeInTheDocument()
  })

  it('renders the Security Overview section', () => {
    expect(
      screen.getByRole('heading', { name: 'Security Overview' }),
    ).toBeInTheDocument()
  })

  it('renders the Recent Activity section', () => {
    expect(
      screen.getByRole('heading', { name: 'Recent Activity' }),
    ).toBeInTheDocument()
  })
})