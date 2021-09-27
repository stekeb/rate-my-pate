import { Pet } from "../domain/Pet";

/**
 * finds the "trending" pet from a list of pets.
 * A pet is considered trending if it has the highest number of ratings compared to other pets in a time frame of 7 days relative to a given date.
 * Note that it's not about the *best* ratings, but the count of individual ratings.
 *
 * @param pets the list of pets
 * @param date the end date of the interval for which to consider the 'trending' state. the start date should be 7 days prior to that date.
 *
 * @returns the pet with the most individual ratings within the [date - 7 days, date] interval or `undefined` if there is unsufficient data within the interval
 */

export function getTrendingPet(pets: Pet[], date: Date): Pet | undefined {
	const startDate = new Date(date);
	const dateToMutate = new Date(date);
	const endDate = dateToMutate.setDate(startDate.getDate() - 7);
	const newDate = new Date(endDate);
	let trendingPet = {} as Pet;
	let ratingsCounter = 0;

	for (let i = 0; i < pets.length; i++) {
		const tempTrendingPet = pets[i].ratings.filter(
			(pet) =>
				new Date(pet.date).getTime() <= startDate.getTime() &&
				new Date(pet.date).getTime() >= newDate.getTime()
		);
		if (tempTrendingPet.length > ratingsCounter) {
			ratingsCounter = tempTrendingPet.length;
			trendingPet = pets[i];
		}
	}

	if (ratingsCounter > 0) {
		return trendingPet;
	} else {
		return undefined;
	}
}
