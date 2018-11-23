import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            question: "What is your question?",
            askedBy: "X"
        },{
            question: "What is your question 2?",
            askedBy: "Y"
        },
        {
            question: "What is your question 3?",
            askedBy: "Z"
        }];
    }
});
