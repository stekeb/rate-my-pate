# first: install dependencies
docker run --rm -v ${PWD}:/home/node/project -w /home/node/project node:12 npm install

# second: run dev server
docker run --rm -p "8080:8080" -v ${PWD}:/home/node/project -w /home/node/project node:12 npm run start
