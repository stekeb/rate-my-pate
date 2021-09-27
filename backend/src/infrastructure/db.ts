import { Sequelize } from "sequelize";
import fs from "fs";
import { initPetsModel } from "./model/Pet";
import { initRatingsModel } from "./model/Rating";
import { addSampleData } from "../repository/petsRepository";

const sequelize = new Sequelize("ratemypet", "dbUser", "dummyPw", {
	host: undefined,
	dialect: "sqlite",

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	logging: false,
	//logging: console.log,
});

const Pets = initPetsModel(sequelize);
const Ratings = initRatingsModel(sequelize);

Ratings.belongsTo(Pets, {
	foreignKey: "petId",
	targetKey: "id",
});

Pets.hasMany(Ratings, {
	foreignKey: "petId",
	sourceKey: "id",
});

export { Pets, Ratings };

sequelize.sync().then(() => addSampleData());

export default sequelize;
