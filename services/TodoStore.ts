export class TodoStore {
  todoList: Array<Object>;
    constructor(){
        this.todoList = [];
    }
    add(item){
        this.todoList.unshift({text:item,done:false});
    }
}