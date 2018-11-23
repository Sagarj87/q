import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        debugger
        let  p =this.store.findAll('question',params.id).then(function(){
            debugger
        },function(){
            debugger
        });
        return p;
    }
});
