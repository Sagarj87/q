import DS from "ember-data";

export default DS.Model.extend({
    answer: DS.attr('string'),
    by: DS.belongsTo('user',{ async: true })
});