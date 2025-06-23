# HealthGuard MVP

A secure medical records management system that allows patients to view their medical records and doctors/nurses to manage patient information.

## Features

- **User Authentication:** JWT-based authentication with role-based access control
- **Medical Records Management:** Create, view, and update medical records
- **Patient Access:** Patients can view and download their own medical records
- **Doctor Access:** Healthcare providers can manage any patient's records
- **Secure:** Full role-based permission system prevents unauthorized access

## Tech Stack

- **Backend:** Django REST Framework (Python)
- **Database:** PostgreSQL (production), SQLite (development)
- **Authentication:** JWT (JSON Web Tokens)
- **Frontend:** Vue.js 3 with Composition API
- **State Management:** Pinia
- **Routing:** Vue Router
- **HTTP Client:** Axios

## Getting Started

### Prerequisites

- Python 3.9+
- Node.js 18+
- npm or yarn
- wkhtmltopdf (for PDF generation)

### Run Development Environment

The easiest way to start both backend and frontend servers is to use the provided script:

```bash
./start-dev.sh