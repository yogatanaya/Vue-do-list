Vue.component('todo-item', {
  props: ['item'],
  template: '<div class="row">'+
    '<div class="col s12 m6">'+
      '<div class="card darken-1">'+
        '<span class="card-title" v-bind:style="isActive">{{ item.title }}</span>'+
          '<div class="card-action">'+
            '<button type="button" v-on:click="onDeleteTodo" class="btn red"><i class="material-icons">delete</i></button>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>',
  methods: {
    onDeleteTodo() {
      this.$emit('onDeleteTodo', this.item);
    }
  },
  computed: {
    isActive() {
      if (this.item.done) {
        return 'text-decoration: line-throught'
      }
    }
  }

})
Vue.component('todo',{
  template: 
    '<div class="container">'+
      '<div class="row justify-content-center">'+
        '<div class="col-md-6">'+
          '<h1 class="text-center">Todo List</h1>'+
          '<hr/>'+
          '<input type="text" v-model="todo.title" class="form-control" v-on:keyup.enter="onCreateTodo" placeholder="input title of todo list & press enter">'+
          '<br/>'+
          '<ul class="list-group">'+
            '<todo-item v-for="item, index in todos" v-bind:item="item" v-bind:key="index"'+
            'v-on:onDeleteTodo="onDeleteTodo">'+
            '</todo-item>'+
          '</ul>'+
        '</div>'+
      '</div>'+
    '</div>',
  data: () => {
    return {
      todos: [
        {
          title: "Buy Milk",
          done: true,
        },
        {
          title: "Buy Beer",
          done: true,
        },
      ],
      todo: {
        name: '',
        done: false,
      }
    }
  },
  methods: {
    onCreateTodo() {
      if (this.todo.title != '') {
        this.todos.push(this.todo)
        this.todo = {
          name: '',
          done: false,
        }
      }
    },
    onDeleteTodo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos.splice(index,1);
    },
  }
})
let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World'
  },
})