import Route from '@ember/routing/route';
let questions = [{
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
export default Route.extend({
    init(){
        let that = this;
        this._super(...arguments);
        
        questions.forEach(question__ => {
            let askedBy = that.store.createRecord("user",{
                "user": question__.askedBy,
                "avatar": "",
                "id": question__.askedBy
            });
    
            let question = that.store.createRecord("question",{
                "question": question__.question,
                "answers": Ember.A([]),
                "description":"",
                "id":  question__.question,
                "askedBy": askedBy
            });
            askedBy.save().then(function(askedBy_){
                question.set("askedBy",askedBy_);
                question.save().then(function(question_){
                });
            });
        });
    },  
    model() {
        let p = this.store.findAll('question').then(function(_questions) {
            return _questions.content.map(function(q) {
                window.console.log(q.getRecord().toJSON()); 
                return q.getRecord().toJSON();
            });
        });
        return p;
        /* this.store.findAll('question').map((q) => {
            debugger
            return q.toJSON();
        }); */
    }
});
