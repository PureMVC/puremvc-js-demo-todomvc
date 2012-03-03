puremvc.define
(
	{
		name: 'todo.view.component.TodoApp'
		
	,	parent: todo.view.component.UiComponent
	
	,	constructor: function TodoApp (selector)
		{
			var TodoList	= todo.view.component.TodoList
			, 	TodoStats	= todo.view.component.TodoStats
			,	TodoCreator	= todo.view.component.TodoCreator
			
			this.initDom(selector);
			this.todoStats= new TodoStats(this.child('footer'));
			this.todoList= new TodoList(this.child('#todo-list'));
			this.todoCreator= new TodoCreator(this.child('header'));
			this.toggleAllCheckbox= this.child('input[type=checkbox]#toggle-all');
			this.toggleAllCheckbox.addEventListener('change', this);
		}
	}
	
,	{
		todoList: null
		
	,	todoStats: null
	
	,	todoCreator: null
	
	,	toggleAllCheckbox: null
	
	,	handleEvent: function (domEvent)
		{
			this.todoList.selectAllTodos(domEvent.target.checked);
		}
	}
)
