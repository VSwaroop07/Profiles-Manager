# Profile Manager

Profile Manager is a responsive profile management system that uses Firebase as a database. It allows users to manage profiles and view the location of the persons whose profiles they have opened.

## Features

- Responsive design
- Firebase integration for database management
- View and manage user profiles
- Display location of profile owners

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/profile-manager.git
    ```
2. Navigate to the project directory:
    ```bash
    cd profile-manager
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## Usage

1. Start the development server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000`.

## Configuration

1. Create a Firebase project and obtain your Firebase configuration.
2. Create a `.env` file in the root directory and add your Firebase configuration:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.