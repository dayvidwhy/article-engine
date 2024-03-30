interface Article {
    title: string;
    content: string;
    author: string;
    id: string;
}

export const useArticleStore = defineStore("articleStore", {
    state: () => ( {
        articles: [{
            title: "First Article",
            content: "This is the first article",
            author: "dy",
            id: "1",
        }],
    }),
    actions: {
        async createArticle(article: Article) {
            this.articles.push(article);
        }
    }
});
  
