pipeline {

  agent any 

    stages { 

        stage( 'Checkout') {

            steps {
                checkout scm

            }
        }

        stage( 'Download in Jenkins') {

            steps {

                echo "Project download successfully."
            
            
            }
        }

        stage( 'Deploy' ){
            
            steps{
                sshPublisher(
                    failOnError: true,
                    publishers: [
                        sshPublisherDesc(
                            configName: 'Azurevm2',
                            verbose: true,
                            transfers: [
                                sshTransfer(
                                    sourceFiles: '**/*',
                                    removePrefix: '',
                                    remoteDirectory: '',
                                    execCommand: 'sudo systemctl reload nginx'
                                )
                            ]
                        )
                    ]
                )
            }
        }

    }
}