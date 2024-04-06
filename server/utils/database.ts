import { Sequelize, DataTypes, Optional, ModelDefined } from "sequelize";

export const db = new Sequelize({
    dialect: "sqlite",
    storage: "./sqlite.db",
    define: {
        // prevent sequelize from pluralizing table names
        freezeTableName: true
    }
});

interface ArticlesAttributes {
    id: string;
    title: string;
    description: string;
    content: string;
}

export const Articles: ModelDefined<
    ArticlesAttributes,
    Optional<ArticlesAttributes, "id"> // id is optional for creation
> = db.define("Articles", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    }
}, {
    tableName: "Articles"
});

(async () => {
    await db.sync();
})();
