import express from "express";
import { loadPet, loadPets, addRating } from "../repository/petsRepository";
import { getTrendingPet } from "../service/petsService";

const router = express.Router();

router.get("/trending", async function (req, res) {
	const { trendDate } = req.body;
	const pets = await loadPets();
	const trendingPet = getTrendingPet(pets, trendDate);
	res.send(trendingPet);
});

router.get("/", async function (req, res) {
	// respond with the list of pets
	const pets = await loadPets();
	res.send(pets);
});

router.get("/:id", async function (req, res) {
	const petId = req.params.id;

	try {
		const pet = await loadPet(Number.parseInt(petId, 10));
		res.send(pet);
	} catch (error) {
		console.log(error);
		res.sendStatus(404);
	}
});

router.put("/:id", async function (req, res) {
	const petId = req.params.id;
	let currentDate = new Date();

	const rating = {
		value: Number.parseInt(req.body.value, 10),
		date: currentDate,
	};
	try {
		if(rating.value > 0 && rating.value < 6) {
			const rateResponse = await addRating(Number.parseInt(petId, 10), rating);
			res.send(rateResponse);
		} else {
			res.send("Invalid Rating Value")
			res.status(400)
		}
		
	} catch (error) {
		console.log(error);
		res.sendStatus(404);
	}
});


export const petsRoutes = router;
