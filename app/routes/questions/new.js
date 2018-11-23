import Route from '@ember/routing/route';

export default Route.extend({
    actions: {
        createQuestion() {
            debugger
            var that = this;
            
            var askedBy = that.store.createRecord("user",{
                "user": that.get("controller.askedBy"),
                "avatar": "",
                "id": that.get("controller.askedBy")
            });

            var question = that.store.createRecord("question",{
                "question": that.get("controller.question"),
                "answers": Ember.A([]),
                "description":"",
                "id": that.get("controller.question")
            });

            askedBy.save().then(function(askedBy_){
                question.set("askedBy",askedBy_);
                question.save().then(function(question_){
                    
                });
            });
            that.transitionTo('questions.question',question);
        }
    }
});
