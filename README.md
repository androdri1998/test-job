# test-job
### Instructions run backend
###### enter in folder docker and configure the file docker-compose.yml
###### run command
docker-compose up -d
###### execute the bash of the psql
docker exec -it NAME_CONTAINER bash
###### connect to psql
psql -U postgres -d DN_NAME
###### run migrations
node_modules/.bin/sequelize db:migrate