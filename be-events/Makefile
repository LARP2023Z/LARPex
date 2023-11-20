docker_copmose = docker compose
docker_copmose_path_db = database/docker-compose.yml
docker_copmose_path_app = docker/docker-compose.yml

prisma = npx prisma
prisma_db = $(prisma) db

npm = npm run

# 
# 
# 

# DOCKER
d-db:
	$(docker_copmose) -f $(docker_copmose_path_db) up -d --build

d-s:
	$(docker_copmose) -f $(docker_copmose_path_app) up -d --build

# EXPRESS SERVER
s-run:
	$(npm) dev

# PRISMA ORM
p-seed:
	$(prisma_db) seed

p-drop:
	$(prisma_db) push --force-reset

p-push:
	$(prisma_db) push

p-studio:
	$(prisma) studio

# 
# 
# 