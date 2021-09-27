import * as Sequelize from "sequelize";

export class PetModel extends Sequelize.Model {}

export function initPetsModel(sequelize: Sequelize.Sequelize): typeof PetModel {
	const attributes = {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
		},
		birthdate: {
			type: Sequelize.DATE,
		},
		name: {
			type: Sequelize.STRING(128),
		},
		species: {
			type: Sequelize.STRING(128),
		},
		imageUrl: {
			type: Sequelize.STRING(128),
		},
	};

	const options = {
		timestamps: false,
		freezeTableName: true,
		tableName: "pets",
		modelName: "pets",
		sequelize,
	};

	PetModel.init(attributes, options);

	return PetModel;
}
