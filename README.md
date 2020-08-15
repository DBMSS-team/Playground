# Playground

Repository for doing POCs

## Steps

- Create your own remote branch
- Clone the repo and create local branch from your remote branch
- Create a folder for your POC Ex: SahilLogin
- Push your changes to your remote branch

## StyleGuide

[JS Style Guide](https://github.com/airbnb/javascript)

Microservices based end to end items delivery application.

## Microservices based architecture

Realtime backend solution is developed using `Nodejs` technology with its most popular framework i-e `ExpressJs`. Web app users connect to the backend using api gateways. RabbitMQ is used for the internal communication between api gateway and the services. API service perform the following major tasks.

- Url Routing
- Validation
- Token based Security Mechanism i-e JWT validation
- Logging
- RMQ Management
- Circuit Breaker

Other services perform the following operations.

- Database Setup
- Event Logging
- Data Operations
- Response API gateway’s request
- Queue Management
- RabbitMQ Health Checks

<p align=center> Architectural diagram is shown below. <p>
  
![architecture](./docs/img/architecture.png)
