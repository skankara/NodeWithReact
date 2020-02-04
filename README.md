# NodeWithReact
This project is a blog post project and is in progress


# Heroku Deployment
Steps : Dynamic Port Binding -> Specify Node Environment -> Specify start script -> Create .gitignore file
  ## Dynamic Port Binding:
  Heroku tells us to which port our app will use and we need to make sure we are using that port
  * const PORT = process.env.Port
  * When ever Heroku runs a project, it has ability to inject a dynamic port by looking for any underneath environment variables
  * Heroku will look for Environment variable and inject the PORT num to this point

  ## Specify Node Environment
  We need to mention the Node version we are using so that Heroku will know which environment it should run out project
  * Go to package.json->after the "main" tag, insert
                  "engines":{
                    "node": "10.16.3", #Current version of the Node
                    "npm": "6.9.0" #Current version of the npm
                  },
  * Heroku reads the packag.json file and configures the system accordingly

  ## Specify start scripts
  Tell Heroku exactly how it need to start he Server
  * Go to package.json -> scripts tag -> remove "test": "echo \"Error: no test specified\" && exit 1"(default) and insert
                                      -> add "start": "node index.js"

  ## Create .gitignore file
  Create a .gitignore as you doesn't need to upload the dependencies to Heroku, it will take care of installing dependencies for us
