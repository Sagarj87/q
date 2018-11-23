import DS from "ember-data";

export default DS.Model.extend({
    user: DS.attr('string'),
    avatar: DS.attr('string'),
    questions: DS.hasMany('question'),
    answers: DS.hasMany('answer'),
});