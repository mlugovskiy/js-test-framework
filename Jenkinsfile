pipeline {
  agent any
  stages {
    stage('install playwright') {
      steps {
        bat '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('test') {
      steps {
        bat '''
          npx playwright test --list
          npx playwright test
        '''
      }
    }
  }
}