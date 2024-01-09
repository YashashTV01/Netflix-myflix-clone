pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh 'npm install'
                    // or yarn install if you prefer yarn
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Building the project...'
                    sh 'npm run build'
                    // or yarn build if you prefer yarn
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo 'Deployment steps go here...'
                    // Add your deployment steps here
                    // This can include copying the build artifacts to a server or deploying to a platform like Vercel
                    // Example: sh 'rsync -avz build/ user@your-server:/path/to/deploy'
                }
            }
        }
    }
}
