const tasks = [
  { id: 0, text: 'Clean the house' },
  { id: 1, text: 'Order groceries' },
  { id: 2, text: 'Build an app' }
];

Vue.component('todo-item', {
  props: ['todo'],
  methods: {
  },
  template: `
    <li>
      {{ todo.text }} 
      <button type="button" v-on:click="$emit('delete-item', todo.id)">Delete</button>
    </li>
  `
});

var app = new Vue({
  el: '#app',
  data: {
    task: '',
    todos: tasks
  },
  computed: {
    count() {
      return this.todos.length;
    }
  },
  methods: {
    addItem () {
      if (this.task) {
        this.todos.push({ id: this.todos.length, text: this.task });
        this.task = '';
        this.count++;
      }
    },

    deleteItem (item) {
      this.todos.splice(item, 1);
      this.count--;
    },

    clearAll() {
      this.todos = [];
    }
  }
});
