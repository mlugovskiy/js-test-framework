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
        script {
          def msg1 = powershell(npx playwright test --list)
          println(msg1)
          def msg2 = powershell(npx playwright test ${testFiles} ${testTitles})
          println(msg2)
        }
      }
    }
  }
}