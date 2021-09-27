Welcome to our LOFINO Coding Challenge!

Your task is to extend a small client/server web application that lets you upload profiles of your pet so others can rate them.

# Prerequisites

- an installation of Node.js and npm
- your favorite IDE
- a possibility to share the result, e.g Dropbox or Github

# Tasks

This repository comes with two software projects: A Node.js based backend and a React based frontend. You find them in the respective directories.

## Backend

- [x] provide a server application based on Node.js that serves an **API** over HTTP
- [x] extend the API to allow users to rate existing pets (e.g. give a rating of 1-5 per pet)
  - the ratings should be stored on the backend as well. You can call `addRating()` in the `petsRepository` for that.
- [x] implement the `getTrendingPet()` function in `service/petsService` that finds the _trending_ Pet for an arbitrary point in time. A pet is considered trending if it has the highest count of individual ratings within a time frame of the previous 7 days from the point in time we want to consider.
- [x] provide an endpoint which returns the trending pet for the current day. Note that the trending pet may change as you add ratings.

## Frontend

- [x] provide a frontend application based on React.js that consumes the backend API
- [x] create a start page that lists all the pets with their infos
  - [x] display the name and image
  - [x] display the current age of the pet
  - [x] display the average rating and the number of ratings
  - [x] on the details page of the pet, add an input element that lets the user rate the pet (which sends the rating to the backend).
    - Make this rating element look like the interactive 5-star rating UI known from e.g. amazon.
    - encode the existing rating in this ui element. I.e. if the pet has an average rating of 3.2, display the first 3 stars differently than the remaining 2 stars. You can use `frontend/public/star-empty.png` and `frontend/public/star-filled.png` for that.
    - for this component, do **not** use a ready-made component from a component library. Write it yourself instead.
  - [x] BONUS: if today is the birthday of a pet then show [this picture of a birthday hat](frontend/public/birthday-hat.png) rotated and halfway overlapping with the pet image (see [mockup](mockups/birthday-hat.png))

# Getting started

## Option 1: with local Node.JS installation

Choose this option if you already have Node.JS installed locally.

NOTE: This assignment has been written for Node 12. If you have trouble running it on later versions, try option #2 below.

- install dependencies on the backend
  ```bash
  cd backend
  npm install
  ```
- start the backend with `npm start`
- use an HTTP client like `curl` or `Postman` (or paste the URL into a browser) to see if the server is responding to requests.

  - `curl http://localhost:8080/hello` -> `Hello World!`

- install dependencies on the frontend
  ```bash
  cd frontend
  npm install
  ```
- start the frontend with `npm start`
- open `http://localhost:3000/` with your web browser

## Option 2: with Docker

If you have a different version than Node 12 installed and Option #1 doesn't work for you for some reason, you can try running the backend server with [Docker](https://www.docker.com/):

```sh
# first: install dependencies
docker run --rm -v ${PWD}:/home/node/project -w /home/node/project node:12 npm install

# second: run dev server
docker run --rm -p "8080:8080" -v ${PWD}:/home/node/project -w /home/node/project node:12 npm run start
```

# Some Notes

- Feel free to use third party modules where appropriate (except for the rating component). You may also change the structure of the files the way you think is appropriate.
- Some of the software structure is not great. Feel free to refactor existing modules as you please.
- There are tests for both projects. Make sure they pass. Feel free to extend the tests where appropriate.
- Focus on code quality and working software, try to follow best practices. Treat the final version of your solution like the first MR you open at a new company.
- Keep an eye on security, usability etc.
- If you feel you're stuck on something, work on something else instead
- Feel free to add comments on the code if you want to explain something or on a place that could be improved
  - you can also add comments on the bottom of this document

# Your Notes

Here you can add your own notes and comments about the project.
For example, what trade offs did you have to decide for? What would you have done differently if you had more time?
What did you think of the tasks? Was it too much / too easy / too ambiguous?

I would have changed the "petroutes" to a pure distributor (e.g. "router.get("/", loadPets);" "router.get("/:id", loadPet);") and change the functions in "petsRepository to e.g.:

// export async function loadPets(
// 	req: express.Request,
// 	res: express.Response
// ): Promise<void> {
// 	try {
// 		const petsModel = await Pets.findAll({
// 			include: [Ratings],
// 		});
// 		res.status(200);
// 		res.send(petsModel.map(convertToDomainObject));
// 	} catch (error) {
// 		console.log(error);
// 		res.status(400);
// 	}
// }

or


// export async function loadPet(
// 	req: express.Request,
// 	res: express.Response
// ): Promise<void> {
// 	try {
// 		const petId: string = req.params.id;
// 		const id = Number.parseInt(petId, 10);

// 		const petsModel = await Pets.findByPk(id, {
// 			include: [Ratings],
// 		});
// 		if (petsModel === null) {
// 			throw Error("not found");
// 		}
// 		res.status(200);
// 		res.send(convertToDomainObject(petsModel));
// 	} catch (error) {
// 		console.log(error);
// 		res.sendStatus(404);
// 	}
// }

However, this broke the already passing tests.

Regarding the tests. I ran into some issues, and had to change the "jest.config.js" and "tsconfig.json" to get rid of an syntax error in the backend tests. In the front-end I also had to change the test slightly as the array used for the test had another structure as the array coming from the backend. I hope this is alright.

If I had more time I would have liked that not only the stars directly update when they are clicked but also the amount and average of ratings displayed. As far as I can see this would have needed a certain amount of prop drilling or use of a state management system as the "Rankings" component is used in both pages on the top of the hirarchy tree.

Regarding the scope of the assignment. It was completely understandable what was asked. I found the difficulty level adequate. However, the expected time of 1-2 hours was a bit short.