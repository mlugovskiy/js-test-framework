pipeline {
  agent any
  parameters {
    string defaultValue: '', description: 'Leave field empty for running all test files', name: 'filesToTest'
  }
  stages {
    stage('Get repository from GitHub') {
      steps {
        git poll: false, url: 'https://github.com/mlugovskiy/js-test-framework'
      }
    }
    stage('Install packages') {
      steps {
        bat 'npm install'
        bat 'npx playwright install chromium'
      }
    }
    stage('Test') {
      steps {
        bat 'call npx playwright test %filesToTest% --list'
        bat 'npx playwright test %filesToTest%'
      }
      post {
        always {
          archiveArtifacts artifacts: 'playwright-report/index.html', followSymlinks: false
          allure includeProperties: false, jdk: '', results: [
            [path: 'allure-results']
          ]
        }
      }
    }
  }
}