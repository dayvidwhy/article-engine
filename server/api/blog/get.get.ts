import { Articles } from "../../utils/database";

export default defineEventHandler(async (event) => {
    const { id }: { id: string } = getQuery(event);

    if (!id) {
        throw new Error("Missing id parameter");
    }

    const article = await Articles.findByPk(id);
    if (!article) {
        throw new Error("Article not found");
    }
    return {
        title: article.get("title"),
        description: article.get("description"),
        content: article.get("content")
    };
});
