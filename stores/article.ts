interface State {
    currentArticle: Article
};

interface Article {
    title: string;
    description: string;
    content: string;
};

export const useArticleStore = defineStore("articleStore", {
    state: (): State => ({
        currentArticle: {
            title: "",
            description: "",
            content: ""
        }
    }),
    actions: {
        async updateCurrentArticle(newContent: string) {
            this.currentArticle.content = newContent;
        },
    }
});
  
