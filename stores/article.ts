import { v4 as uuidv4 } from "uuid";

interface State {
    articles: Article[],
    currentArticle: Article
};

interface Article {
    title: string;
    description: string;
    content: string;
    id: string;
};

export const useArticleStore = defineStore("articleStore", {
    state: (): State => ({
        articles: [{
            title: "Article 1",
            description: "Description 1",
            content: "Content 1",
            id: uuidv4()
        }],
        currentArticle: {
            title: "",
            description: "",
            content: "",
            id: ""
        }
    }),
    actions: {
        async createArticle(article: Article) {
            this.articles.push(article);
        },
        async updateCurrentArticle(newContent: string) {
            this.currentArticle.content = newContent;
        },
    }
});
  
