import { Articles } from "../../utils/database";

export default defineEventHandler(async () => {
    const articles = await Articles.findAll();
    if (!articles) {
        throw new Error("Article not found");
    }
    
    console.log("Got articles ", articles);
    return {
        articleList: articles.map(article => ({
            id: article.get("id"),
            title: article.get("title")
        }))
    };
});
