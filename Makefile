docker_copmose = docker compose
docker_copmose_path_root = ./compose.yaml

docker_events_service_db = be-events-service-db
docker_events_service = be-events-service
 
# DOCKER
d-b:
	$(docker_copmose) -f $(docker_copmose_path_root) up --build

d-db-events-login:
	$(docker_copmose) -f $(docker_copmose_path_root) run $(docker_events_service_db) sh -c "psql postgresql://root:password@$(docker_events_service_db)/events"

d-db-events-seed:
	$(docker_copmose) -f $(docker_copmose_path_root) run $(docker_events_service) sh -c "npx prisma db seed"
