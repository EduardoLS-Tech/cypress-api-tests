# Cypress API Automation - Candidate Project (Pleno)

Project prepared to meet the technical challenge requirements. It's organized following
a Service Object pattern for API tests, with clear separation of concerns and reusable code.

## Quick start

1. Node 18+ recommended.
2. Install deps:
   ```bash
   npm install
   ```
3. Run tests (headless + mochawesome report):
   ```bash
   npm test
   npm run report:merge
   npm run report:generate
   ```
4. Or open interactive runner:
   ```bash
   npm run open
   ```

## What is included
- Tests for the 4 required scenarios: users list, login, create product, get user by id.
- Service objects under `cypress/support/services/` to centralize API calls.
- `cypress/support/commands.js` with `cy.login` and `cy.generateMD5` utilities.
- Fixtures for credentials and product payload.
- Mochawesome reporting + scripts to merge/generate reports.
- Example GitHub Actions workflow under `.github/workflows/ci.yml` to run tests on push/PR.

## Notes
- Do not commit `cypress.env.json`. Use it locally if you need to store secrets.
- Tests accept both `token` and `accessToken` to be robust against API differences.
- Project tone and comments are intentionally concise and written as a QA engineer.
