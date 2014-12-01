module.exports = function(router){
    // you can add app common logic here
    // router.use(function(req, res, next){
    // });

    // also you can add custom action
    // require /spa/some/hefangshi
    // router.get('/some/:user', router.action('api'));
    
    // or write action directly
    // router.get('/some/:user', function(res, req){});

    // a restful api example
    router.route('/book')
        // PUT /{{-app_name-}}/book/id
        .put(router.action('book').put)
        // GET /{{-app_name-}}/book
        .get(router.action('book'));

    router.route('/book/id/:id')
        // GET /{{-app_name-}}/book/id
        .get(router.action('book').get)
        // DELETE /{{-app_name-}}/book/id
        .delete(router.action('book').delete);
};