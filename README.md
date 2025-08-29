# Headless CMS & Personal Portfolio

This is a full-stack portfolio project featuring a secure admin dashboard for content management and a public-facing website to display the portfolio. The project is built with a .NET REST API back-end and two separate React front-end applications.

---
## Project Overview

The architecture is a **headless CMS**. The .NET back-end serves as the "head," managing and providing data through a REST API. It is consumed by two different clients: a private admin dashboard for managing content and a public website for displaying it.

- **.NET REST API:** The back-end built with C# and ASP.NET Core. It handles business logic, database interactions, and user authentication.
- **React Admin Dashboard:** A secure, single-page application for creating, updating, and deleting portfolio projects.
- **React Public Site:** A fast, public-facing website that fetches and displays the portfolio content for visitors.

---
## Design Choices & Technologies

This project was designed to demonstrate a modern, full-stack skillset, touching on technologies and practices common in enterprise software development.

### Technology Stack

- **Back-End:** C# / .NET 8, ASP.NET Core Web API, Entity Framework Core
- **Front-End:** React, JavaScript, Vite, Axios
- **Database:** SQL Server (running in a Docker container)
- **Authentication:** JWT (JSON Web Tokens)
- **Infrastructure:** Docker Compose for local development environment management.

### Architectural Decisions

- **Headless Architecture:** This decouples the back-end (content management) from the front-end (presentation). It's a flexible and scalable approach that allows for multiple "heads" (like a mobile app or another website) to consume the same API.
- **Separate Admin & Public Front-Ends:** This separation of concerns ensures the secure, complex admin application is completely isolated from the lightweight, performance-focused public site.
- **Token-Based Authentication:** Using JWT is a stateless and industry-standard method for securing APIs, making it perfect for single-page applications.
- **.NET User Secrets:** Sensitive information like database passwords and JWT secret keys are stored using .NET's User Secrets manager during development, preventing them from being accidentally committed to version control.
- **Docker for Local Development:** The entire back-end database is containerized using Docker and managed with Docker Compose. This ensures a consistent and reproducible development environment for any developer on any machine.

---
## Development Phases

The project was built iteratively, mirroring an agile development process.

### Phase 1: Back-End API Foundation
The core API was established with CRUD (Create, Read, Update, Delete) functionality for portfolio projects. This phase involved setting up the .NET project, defining data models, configuring the Entity Framework Core database context, and building the initial API controllers.

### Phase 2: Admin Dashboard Front-End
The secure dashboard was built to consume the API. This involved scaffolding a React application, building reusable components for forms and lists, and wiring up the UI to perform all CRUD operations.

### Phase 3: Security & Authentication
Authentication was layered onto the application. This included adding user registration and login endpoints to the API, implementing JWT generation and validation, securing the API's endpoints, and building a login flow in the React admin dashboard.

### Phase 4: Public Portfolio Site
The public-facing website was created as a new, separate React application. This site consumes only the public `GET` endpoints of the API to display the portfolio content in a read-only format.

---
## Future Development

This project provides a solid foundation that can be extended with more advanced features to further demonstrate enterprise-level development practices.

### Front-End Experience
- **Component Library & UI Styling:** Create a dedicated component library with a consistent design system (e.g., using Tailwind CSS or Material-UI) to improve the look and feel of both the admin dashboard and the public site.
- **State Management:** For the admin dashboard, implement a state management library like Redux or Zustand. This will make the application's state more predictable and easier to manage as more features are added.
- **User Experience (UX) Enhancements:** Add features like loading spinners for API requests, toast notifications for success or error messages, and form validation to provide a smoother user experience.

### Back-End Features
- **Image Uploads:** Add functionality to the API to handle image uploads, allowing users to upload project images directly instead of linking to external URLs. This would involve storing the files in a service like Amazon S3.
- **More Content Types:** Expand the CMS to handle other types of content, such as a blog, an "About Me" page, or testimonials, by adding new models and API endpoints.
- **Role-Based Authorization:** Implement a more granular permission system. For example, you could add roles like "Editor" or "Viewer" to the `User` model to control who can perform certain actions.

### Deployment & DevOps
- **Containerization:** Create `Dockerfiles` for the .NET API and the two React applications to fully containerize every part of the project.
- **Cloud Deployment:** Deploy the containerized applications to a cloud provider like AWS, using services like Amazon ECS for orchestration, RDS for the database, and S3 for static file hosting.
- **CI/CD Pipeline:** Set up a continuous integration and continuous deployment (CI/CD) pipeline using a tool like GitHub Actions. This would automate the process of building, testing, and deploying the applications whenever new code is pushed to the repository.
