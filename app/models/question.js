import DS from "ember-data";

export default DS.Model.extend({
  question: DS.attr('string'),
  askedBy: DS.belongsTo('user',{ async: true }),
  description: DS.attr('string'),
  answers: DS.hasMany('answer',{ async: true })
});