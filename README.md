# Frontend CI/CD Capstone Project – DevOpsHub

## Project Overview

DevOpsHub is a frontend dashboard project developed to demonstrate a practical CI/CD workflow using React, Vite, GitHub Actions, and Netlify.

The project demonstrates automated testing, code quality checks, production builds, version control, and automated deployments to separate staging and production environments.

## Live Deployments

| Environment | URL |
|---|---|
| Production | https://frontend-cicd-capstone.netlify.app |
| Staging | https://staging--frontend-cicd-capstone.netlify.app |

Both deployments are publicly accessible.

## Technologies Used

- React
- Vite
- JavaScript
- HTML and CSS
- Git and GitHub
- GitHub Actions
- Vitest
- React Testing Library
- ESLint
- Netlify

## Application Features

The DevOpsHub dashboard includes:

- Overview dashboard with sample DevOps metrics
- CI/CD pipeline status section
- Deployment information
- Automated testing summary
- Security information
- Recent activity section
- Sidebar navigation

**Note:** The dashboard currently displays sample demonstration data. It is not connected to live AWS, GitHub Actions, or Netlify metrics.

## CI/CD Pipeline

GitHub Actions automates the following checks whenever changes are pushed to, or pull requests target, the `main` and `staging` branches:

1. Check out the repository.
2. Set up Node.js.
3. Install dependencies using `npm ci`.
4. Run automated tests using Vitest.
5. Run ESLint code quality checks.
6. Build the production application.

### Latest Verified CI Results

- Workflow: Frontend CI Pipeline
- Branch: staging
- Commit: `77b1fed`
- Test files passed: 1
- Tests passed: 8
- Overall workflow status: Success

## Deployment Strategy

The project uses Netlify's GitHub integration for automatic deployments.

- **Production:** Changes pushed to `main` trigger production deployments.
- **Staging:** Changes pushed to `staging` trigger staging branch deployments.
- **Pull requests:** Netlify pull request previews are enabled.

GitHub Actions handles CI validation, while Netlify handles hosting and automatic deployment.

GitHub repository environments named `staging` and `production` have also been configured with branch restrictions. The current GitHub Actions workflow does not yet use these environments as deployment approval gates.

## GitHub Repository

[https://github.com/taiwoj14/frontend-cicd-capstone](https://github.com/taiwoj14/frontend-cicd-capstone)

### Branches

- `main` – Production source branch.
- `staging` – Staging and testing branch.

## Running the Project Locally

### Prerequisites

- Node.js 22 or later
- npm
- Git

### Clone the repository

```bash
git clone https://github.com/taiwoj14/frontend-cicd-capstone.git
cd frontend-cicd-capstone
```

### Install dependencies

```bash
npm ci
```

### Start the development server

```bash
npm run dev
```

### Run automated tests

```bash
npm run test:run
```

### Run ESLint

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

The production build is generated in the `dist/` directory.

## Project Evidence

The `screenshots/` directory contains numbered screenshots documenting project development and verification, including:

- GitHub Actions pipeline execution
- Successful automated tests
- Netlify production deployment
- Public production website access
- Netlify staging deployment
- Staging website verification

## Learning Outcomes

This project demonstrates practical experience with:

- Frontend application development
- Git branching and version control
- Continuous Integration using GitHub Actions
- Automated testing with Vitest
- Code quality checks using ESLint
- Production build verification
- Continuous deployment using Netlify
- Staging and production environment management
- Technical documentation and deployment evidence

---

**Project:** Frontend CI/CD Capstone – DevOpsHub
**Repository:** [taiwoj14/frontend-cicd-capstone](https://github.com/taiwoj14/frontend-cicd-capstone)