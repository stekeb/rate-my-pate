import * as Sequelize from "sequelize";
import { Pets } from "../db";

export class RatingModel extends Sequelize.Model {
	ratings: any;
}

export function initRatingsModel(
	sequelize: Sequelize.Sequelize
): typeof RatingModel {
	const attributes: Sequelize.ModelAttributes = {
		id: {
			type: Sequelize.INTEGER(),
			primaryKey: true,
			autoIncrement: true,
		},
		petId: {
			type: Sequelize.INTEGER(),
			references: {
				model: Pets,
				key: "id",
			},
		},
		value: {
			type: Sequelize.INTEGER(),
		},
		date: {
			type: Sequelize.DATEONLY(),
		},
	};

	const options = {
		timestamps: false,
		freezeTableName: true,
		tableName: "ratings",
		modelName: "ratings",
		sequelize,
	};

	RatingModel.init(attributes, options);

	return RatingModel;
}
