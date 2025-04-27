# My CV App

A simple Angular application serving as a CV, with three views:

- **About Me** – Introduction text  
- **Skills** – List of skills  
- **Experience** – Chronological work history  

## How I Built It

1. Used the Angular CLI (`ng new`) to scaffold a standalone-routing app.  
2. Generated three components: `about-me`, `skills`, `experience`.  
3. Configured routes in `app.routes.ts` and wired them in `app.config.ts`.  
4. Added navigation links and `<router-outlet>` in `app.component.html`.  
5. Populated each component’s HTML & CSS with minimal styling.  
6. Initialized Git, committed changes, and pushed to GitHub.

## Running Locally

```bash
git clone https://github.com/<your-username>/my-cv.git
cd my-cv
npm install
ng serve --open
