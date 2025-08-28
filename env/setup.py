import os
import subprocess
import getpass
from pathlib import Path

ENV_FILE = ".env"
DOCKER_COMPOSE = "docker-compose.yml"

current_file_path = os.path.abspath(__file__)
current_file_directory = os.path.dirname(current_file_path)
project_directory = os.path.dirname(current_file_directory)
data_directory_path = Path(f'{project_directory}/data')
dotenv_path = Path(f'{current_file_directory}/{ENV_FILE}')
docker_compose_path = f'{current_file_directory}/{DOCKER_COMPOSE}'

def setup_environment():
    """Checks for data directory and creates it if it doesn't exist."""
    if not data_directory_path.exists():
        print("Making data directory at:")
        print(data_directory_path)
        os.mkdir(data_directory_path)




    """Checks for .env file and creates it if it doesn't exist."""
    if not dotenv_path.exists():
        print(f"'{ENV_FILE}' not found.")
        print("Please enter the desired password for the database 'sa' user.")
        
        # Use getpass to hide password input
        password = getpass.getpass("DB Password: ")
        
        with open(dotenv_path, "w") as f:
            f.write(f"DB_PASSWORD={password}\n")
            f.write(f"CWD={project_directory}\n")
        print(f"Successfully created '{ENV_FILE}'.")
    else:
        print(f"Found existing '{ENV_FILE}'.")

def run_docker_compose():
    """Runs 'docker-compose up -d' to start the services."""
    print("\nStarting Docker services with docker-compose...")
    try:
        # Use shell=True for Windows compatibility, fine for this trusted command
        subprocess.run(["docker-compose", "-f", docker_compose_path, "up", "-d"], check=True, shell=os.name == 'nt')
        print("\nDocker container is up and running in detached mode.")
        print("Run 'docker ps' to verify.")
    except subprocess.CalledProcessError as e:
        print(f"Error running docker-compose: {e}")
        print("Please ensure Docker and Docker Compose are installed and running.")
    except FileNotFoundError:
        print("'docker-compose' command not found.")
        print("Please ensure Docker is installed and in your system's PATH.")

if __name__ == "__main__":
    setup_environment()
    run_docker_compose()