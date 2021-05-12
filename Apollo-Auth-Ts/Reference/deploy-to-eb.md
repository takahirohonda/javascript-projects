# Guide to deploy to Elastic Beanstalk

Make sure [EB CLI](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install.html) is installed.

## (1) Create Dockerrun.aws.json

For a single container deployment, we do not need Dcokerrun.aws.json. Elastic Beanstalk will use doccker-compose file.

## (2) Initialise with eb init

First of all we need to initialise it. Make sure to choose Multi-container Docker option for running multiple containers.

```bash
eb init

# to reset the initialised eb config
eb init -i
```

## (3) Deploy first time

Use eb create command with environment name.

```bash
eb create swapi-mock
```

## (4) Update

We can update the code with deploy command by passing environment name

```bash
eb deploy swapi-mock
```

## (5) Terminate

This will delete all the resources associated with environment

```bash
eb terminate swapi-mock
```

# Running containers locally

## (1) Setting up the folder

Wiremock get mappings from mapping folder. Actual data can be retrieved from __files.

```bash
__files # Including all the data files
mappings # Including actual files
  star-wars-api-proxy-mappings.json # We can set up actual endpoint if no mock was set
  star-wars-starship-all.json # serviing starship.json file under __files/starship/starship.json
  star-wars-starship-executor.json # serving executor data from __files/starship/starship-executor.json
```

## (2) Running container with https locally

Once the folders are ready as above. In the same directory, we can run this locally.

Note that we need to get the full path for mapping the local folder to docker as data source. Use %cd% for command line for Windows. For Linux, use pwd.

```bash
# Pull image
docker pull rodolpheche/wiremock

# Run container
docker run --name swapi-wiremock -dp 8443:8443 -v %cd%/mock-data:/home/wiremock rodolpheche/wiremock --https-port 8443 --verbose
```

For more advanced option, we can create a recorder instance to record all the request went through the wiremock endpoint. We can record in the recordings folder.

```bash
docker run --name swapi-wiremock-recorder -dp 9443:9443 -v %cd%/recordings:/home/wiremock rodolpheche/wiremock --proxy-all=https://starwars.api.com --record-mappings --https-port 9443 --verbose
```

Alternatively, user docker compose.

```bash
docker-compose up -d
```

## (3) Check endpoint

You can see the mock data comming from the browser

https://localhost:8443/starwars/api/starship

https://localhost:8443/starwars/api/starship/executor


# EB CLI Command Reference

## 1-1. Deploying with version and description

Use -1 to add version name and -m to add description

```bash
eb deploy sampleapp-dev -l AnotherVersion -m "This is another version."
```

## 1-2. Create multiple environments

Specify the environment name and app version (if no version, soucer code will be uploaded with new version).

```bash
eb create sampleapp-staging --version AnotherVersion
eb create sampleapp-production --version AnotherVersion

# check the list of environment (* indicates default environment)
eb list

# check the status of a particular environment
eb status sampleapp-staging

# We can use particular environment
eb use sampleapp-staging

# Open app
eb open sampleapp-staging
eb open sampleapp-production

# Set environment variable per environment
setenv -e sampleapp-staging VAR1=test VAR2=value
# check environment variable
eb printenv sampleapp-staging

# scale apps 
eb scale 5 sampleapp-production
# then check it with health command
