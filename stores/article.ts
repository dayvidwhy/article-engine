import { v4 as uuidv4 } from "uuid";

interface Article {
    title: string;
    description: string;
    content: string;
    id: string;
}

export const useArticleStore = defineStore("articleStore", {
    state: (): {
        articles: Article[]
    } => ({
        articles: [{
            title: "Article 1",
            description: "Description 1",
            content: "Content 1",
            id: uuidv4()
        }],
    }),
    actions: {
        async createArticle(article: Article) {
            this.articles.push(article);
        }
    }
});
  
