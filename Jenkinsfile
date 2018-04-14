pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'chmod +x bin/build && ./bin/build'
            }
        }
        stage('Test') {
            steps {
                sh 'chmod +x bin/test && ./bin/test'
            }
        }
        stage('Deploy') {
            when {
                branch 'master'
            }
            steps {
                echo 'this is master branch'
            }
        }
    }
}