
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('DevOpsHub Dashboard Integration Tests', () => {
  beforeEach(() => {
    render(<App />)
  })

  const navigationSections = [
    { name: /overview/i, target: 'overview' },
    { name: /CI\/CD Pipeline/i, target: 'pipeline' },
    { name: /deployments/i, target: 'deployments' },
    { name: /testing/i, target: 'testing' },
    { name: /security/i, target: 'security' },
  ]

  it.each(navigationSections)(
    'connects the $target navigation link to its section',
    ({ name, target }) => {
      const link = screen.getByRole('link', { name })

      expect(link).toHaveAttribute('href', `#${target}`)

      const destination = document.getElementById(target)

      expect(destination).toBeInTheDocument()
    },
  )
})

