to run this application.
run the following commands
    
    > sudo docker-compose up
    > sudo docker cp ./users.sql mysql:/
    > sudo docker exec -it mysql sh
    > mysql -u root -p mysql<users.sql
    > enter 123456
    > check if backend is up http://localhost:8081/BACKEND/monitor/ping
    > then open frontend/index.html

    >curl to test api
        curl --location --request POST 'http://localhost:8081/BACKEND/api/v1/user/saveDataInDB' \
        --header 'Content-Type: application/json' \
        --data-raw '{
            "firstName" : "test",
            "lastName" : "test",
            "email" : "test@test.com",
            "userName" : "test",
            "password" : "test"
        }'
