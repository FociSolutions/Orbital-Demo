# Orbital-Demo
Sample project demonstrating expected usage of Orbital within a development team


----

## Orbital OpenApi Specification

### Introduction
The OpenAPI Specification (OAS) defines a standard, language-agnostic interface to RESTful APIs which allows both developers and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic. 

src: https://swagger.io/specification/ 

The output of an OpenAPI Specification is a document or documents that define the API. The format is usually `YAML` or `JSON`, however YAML is the preferred standard due to its human-readable syntax. 



### Creating an OpenAPI document 
Recommended Text Editors:
- VSCode IDE with 'YAML' (Red Hat) extension 
- Swagger Editor: https://editor.swagger.io/
- Sublime with 'Pretty YAML' plugin


For Orbital, a sample OpenAPI document in YAML can be located within the `Orbital-Demo` repository accessible via: https://github.com/FociSolutions/Orbital-Demo/blob/develop/Samples/pet-store-example.yml.

The `pet-store-example.yml` sample document serves to assist developers with syntax, indentation formatting and pathing specifications. **For further information on creating OpenAPI documents, please refer to the Swagger OpenAPI documentation here: https://swagger.io/specification/**


### Orbital Considerations 
- Currently compatible with Swagger 2.0. Ensure the version at the top of the document specifies `swagger: '2.0'`.
- When creating the mock definition from the OpenAPI specifications, the parser transcribes the verbs into specific JSON schemas, based on the path names given. 
- Default scenarios are generated based off the specific paths given.


### Troubleshooting
- As OpenAPI YAML formats work on a `key: value` structure, ensure the keys are unique for each path. If different HTTP methods rely on the same path, you can nest them within the path name. e.g. PUT, DELETE, GET by id are dependent on a `petId` parameter in the URL therefore these methods can be nested with the `/pets/{petId}` path.
- If different HTTP methods rely on the same `parameters`, you can declare them globally under the path name, and will be utilized across all endpoints. 
```
/pets/{petId}:
      parameters: 
          - name: petId
            in: path
            required: true
            description: The id of the pet to retrieve
            type: string

        # Begin your HTTP Methods specification from this line downwards
```
- Depending on the amount of servers required, developers can specify the URL for different environments during stages of development. Each URL path shares the same key name `url` due to the preceeding `-` symbol denoting array types. 

```
servers:
  - url: https://localhost:5001/api/v1/OrbitalAdmin
    description: Basepath HTTPS URL when launching an Orbital instance for development

  - url: http://localhost:5000/api/v1/OrbitalAdmin
    description: Basepath HTTP URL when launching an Orbital instance for development
```

**NOTE: Utilizing `servers` key words may be incompatible with Swagger 2.0 version**. 
If working with newer syntax, consider indicating the version at the top of the file as OpenAPI version 3.0.x e.g. `openapi: 3.0.0`.  

- If working on a local text editor, for added confirmation of correct syntax, indentation, etc. copy/paste your working file into the **Swagger Editor** to confirm the specifications are readable YAML/JSON format. URL: https://editor.swagger.io/

**For further information on troubleshooting OpenAPI documents, please refer to the Swagger OpenAPI documentation here: https://swagger.io/specification/**

----

##cURL Bash Script

###Introduction
cURL is command line tool for doing "all sorts of URL manipulation and transfers" [1]. However, in this particular project, it is used to automate a series of HTTP requests to demonstrate the functionality of the Demo App.

###Pet Store cURL Bash Script
In order to demonstrate that the Pet Store Demo App is working in accordance to the specified Mock Definition contract as described in the .yaml file, a bash script is provided in the demo project, in the /Scripts folder in the root directory. The bash script is designed to hit the defined endpoints of /pets and /pets/{id} and demonstrates the following functionality:
- testing the GET action to /pets to get all pets, should get a 200 OK response
- testing the POST action to /pets, should get a 201 Created response
- testing the GET action to /pets/{id} to get the details of a specific pet, should get a 200 OK response
- testing the PUT action to /pets/{id} to update details of an existing pet, should get a 200 OK
- testing the PUT action to /pets/{id} to create a new pet with specified ID, should get a 200 OK
- testing the DELETE action to /pets/{id} to delete a specific pet, should get a 200 OK

###Running the Script
To run the script via terminal, follow the steps below. Firstly, ensure that you are serving the Demo App locally so that the cURL requests can reach the endpoints. 

**Step One: Ensuring the Script is Executable**
Secondly, the script should already be executable, but to ensure that it is:
1. Navigate to the /Scripts folder.
2. Execute the following command in terminal:
```
chmod +x ./PetStoreCurlTests.sh
```

**Step Two: Bash Command**
This can be run from any directory in the terminal or run by navigating to the directory and executing.
Run either of the following scripts in terminal depending on your current directory:
```
bash relative/path/to/Orbital-Demo/Scripts/PetStoreCurlTests.sh

#or if already in directory:
bash  ./PetStoreCurlTests.sh
```
The bash script should then execute and print what it is doing at each step, as well as the expected response. Then the actual response will be printed, and so on.

----

##Sources
[1] https://curl.se/docs/httpscripting.html

