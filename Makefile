docker_copmose = docker compose
docker_copmose_path_root = ./compose.yaml

docker_events_service_db = be-events-service-db
docker_events_service = be-events-service

docker_games_service_db = be-games-service-db
docker_games_service = be-games-service
 
# DOCKER
d-b:
	$(docker_copmose) -f $(docker_copmose_path_root) up --build

# DOCKER EVENTS
d-db-events-login:
	$(docker_copmose) -f $(docker_copmose_path_root) run $(docker_events_service_db) sh -c "psql postgresql://root:password@$(docker_events_service_db)/events"

d-db-events-seed:
	$(docker_copmose) -f $(docker_copmose_path_root) run $(docker_events_service) sh -c "npx prisma db seed"

# DOCKER GAMES
d-db-games-login:
	$(docker_copmose) -f $(docker_copmose_path_root) run $(docker_games_service_db) sh -c "psql postgresql://root:password@$(docker_games_service_db)/games"

d-db-games-seed:
	$(docker_copmose) -f $(docker_copmose_path_root) run $(docker_games_service) sh -c "npx prisma db seed"
