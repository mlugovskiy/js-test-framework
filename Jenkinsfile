pipeline {
  agent any
  stages {
    stage('install playwright') {
      steps {
        powershell '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('test') {
      steps {
        powershell '''
          npx playwright test --list
          npx playwright test ${testFiles} ${testTitles}
        '''
      }
    }
  }
}