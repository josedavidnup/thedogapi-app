const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    'dog',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      min_height: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isGreater(value) {
            if (parseInt(value) >= parseInt(this.max_height)) {
              throw new Error('Min Height must be smaller than Max Height.');
            }
          },
        },
      },
      max_height: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isSmaller(value) {
            if (parseInt(value) <= parseInt(this.min_height)) {
              throw new Error('Max Height must be greater than Min Height.');
            }
          },
        },
      },
      height: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.min_height} - ${this.max_height}`;
        },
      },
      min_weight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isGreater(value) {
            if (parseInt(value) >= parseInt(this.max_weight)) {
              throw new Error('Min Weight must be smaller than Max Weight.');
            }
          },
        },
      },
      max_weight: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isSmaller(value) {
            if (parseInt(value) <= parseInt(this.min_weight)) {
              throw new Error('Max Weight must be greater than Min Weight.');
            }
          },
        },
      },
      weight: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.min_weight} - ${this.max_weight}`;
        },
      },
      min_life_span: {
        type: DataTypes.STRING,
        validate: {
          isGreater(value) {
            if (parseInt(value) >= parseInt(this.max_life_span)) {
              throw new Error(
                'Min life span must be smaller than Max life span.'
              );
            }
          },
        },
      },
      max_life_span: {
        type: DataTypes.STRING,
        validate: {
          isSmaller(value) {
            if (parseInt(value) <= parseInt(this.min_life_span)) {
              throw new Error(
                'Max life span must be greater than Min life span.'
              );
            }
          },
        },
      },
      life_span: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.min_life_span} - ${this.max_life_span} years`;
        },
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
