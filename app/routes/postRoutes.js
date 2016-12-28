module.exports = function(app) {
    var postController = app.controllers.postController;

    app.route('/listPosts')
        .get(postController.listPosts);

    app.route('/savePost')
        .post(postController.savePost);

    app.route('/post/:id')
        .get(postController.findByIdPost)
        .delete(postController.deletePost);

    app.route('/activePost/:id')
        .put(postController.activePost);

    app.route('/inactivePost/:id')
        .put(postController.inactivePost);
}
