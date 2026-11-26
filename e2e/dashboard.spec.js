import { test, expect } from '@playwright/test'

test.describe('DevOpsHub Dashboard - End-to-End Tests', () => {
  test('loads the dashboard and displays operational status', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', { name: 'Deployment Dashboard' }),
    ).toBeVisible()

    await expect(
      page.getByText('All Systems Operational'),
    ).toBeVisible()

    await expect(
      page.getByRole('heading', { name: 'Welcome to your DevOps Dashboard' }),
    ).toBeVisible()
  })

  test('displays staging and production environments', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', { name: 'Staging' }),
    ).toBeVisible()

    await expect(
      page.getByRole('heading', { name: 'Production' }),
    ).toBeVisible()
  })

  test('navigates to the CI/CD Pipeline section', async ({ page }) => {
    await page.goto('/')

    await page.getByRole('link', { name: /CI\/CD Pipeline/ }).click()

    await expect(page).toHaveURL(/#pipeline/)

    await expect(
      page.getByRole('heading', { name: 'CI/CD Pipeline' }),
    ).toBeVisible()
  })

  test('displays testing and security sections', async ({ page }) => {
    await page.goto('/')

    await expect(
      page.getByRole('heading', { name: 'Testing Results' }),
    ).toBeVisible()

    await expect(
      page.getByRole('heading', { name: 'Security Overview' }),
    ).toBeVisible()
  })
})
