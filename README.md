# devops-camp

- Rename **.env.example** to **.env** and fill it out
- Run:

```
docker compose up -d --scale api=3
```

## Watchtower to monitor changes:

```
 docker run -d --name watchtower -e WATCHTOWER_TRACE=true -e WATCHTOWER_DEBUG=true -e WATCHTOWER_POLL_INTERVAL=50 -v /var/run/docker.sock:/var/run/docker.sock containrrr/watchtower tasker-api-1
```

- `docker compose build api`
- `docker compose push api`

## Docker Swarm

- `docker swarm init`
- `docker node ls` - List docker swarm nodes
- `docker stack deploy -c docker-compose.yml tasker` - Stack name `tasker`
- `docker stack ls`
- `docker stack services tasker` - List services | `docker service ls`
- `docker stack ps tasker` - List Tasks
- Build and push new Image
- `docker stack deploy -c docker-compose.yml tasker` - Rolling updates
