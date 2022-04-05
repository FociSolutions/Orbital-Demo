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