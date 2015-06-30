var TodoStore = (function () {
    function TodoStore() {
        this.todoList = [];
    }
    TodoStore.prototype.add = function (item) {
        this.todoList.unshift({ text: item, done: false });
    };
    return TodoStore;
})();
exports.TodoStore = TodoStore;
