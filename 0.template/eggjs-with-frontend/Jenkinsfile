pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'docker build . -t api'
      }
    }

    stage('run') {
      steps {
        sh '''
docker rm -f api || true 
docker run -d --name api -p 7001:7001 -v ~/logs:/root/logs --restart always api
sleep 1
docker logs api
'''
      }
    }

  }
}