#!/bin/bash

#bash script that tests the demo endpoints of an app using the orbital mockdefinition service
#and displaying responses in CLI as outlined in the pet-store-example.yml file

#FOLLOWING VARS ASSUME THAT THE HTTP PROTOCOL IS BEING HOSTED ON PORT 500
#ALSO ASSUMING THAT THERE IS AN EXISTING PET WITH AN ID OF 1
#AND NO EXISTING PET AT ID=200
PET_PATH=http://localhost:5000/pets
PET_ID_PATH=http://localhost:5000/pets/1
PUT_PET_PATH=http://localhost:5000/pets/200

#testing the GET action to /pets to get all pets, should get a 200 OK response
echo "GETting all pets from the /pets endpoint and expecting a 200 OK response"
curl -v --header "Content-Type: application/json" -d "" $PET_PATH

#testing the POST action to /pets, should get a 201 Created response
echo "POSTing to the /pets endpoint and expecting a 201 Created response"
curl -v -X POST --header "Content-Type: application/json" -d "{\"id\":\"10\",\"name\":\"sherlock\",\"tag\":\"cat\"}" $PET_PATH

#testing the GET action to /pets/{id} to get the details of a specific pet, should get a 200 OK response
echo "GETting the pet with ID=1 from the /pets/1 endpoint and expecting a 200 OK"
curl -v --header "Content-Type: application/json" -d "" $PET_ID_PATH

#testing the PUT action to /pets/{id} to update details of an existing pet, should get a 200 OK
echo "PUTting new detail updates to the pet with ID=1 at the /pets/1 endpoint and expecting a 200 OK"
curl -v -X PUT --header "Content-Type: application/json" -d "{\"id\":\"1\",\"name\":\"alfredo\",\"tag\":\"cat\"}" $PET_ID_PATH

#testing the PUT action to /pets/{id} to create a new pet with specified ID, should get a 200 OK
echo "PUTting a new pet with ID=200 at the /pets/200 endpoint and expecting a 200 OK"
curl -v -X PUT --header "Content-Type: application/json" -d "{\"id\":\"8\",\"name\":\"tom\",\"tag\":\"cat\"}" $PUT_PET_PATH

#testing the DELETE action to /pets/{id} to delete a specific pet, should get a 200 OK
echo "DELETE-ing the pet with ID=200 at the /pets/200 endpoint and expecting a 200 OK"
curl -v -X DELETE --header "Accept: application/json" -d "" $PUT_PET_PATH
