import { Sequelize, DataTypes, Optional, ModelDefined } from "sequelize";

export const db = new Sequelize({
    dialect: "sqlite",
    storage: "./sqlite.db",
    define: {
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
    Optional<ArticlesAttributes, "id">
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
