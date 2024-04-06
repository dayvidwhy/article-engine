import { Articles } from "../../utils/database";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log(body);
    const newArticle = await Articles.create({
        title: body.title,
        description: body.description,
        content: body.content
    });

    return {
        id: newArticle.get("id")
    };
});
