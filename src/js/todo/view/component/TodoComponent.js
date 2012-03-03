puremvc.define
(
	{
		name: 'todo.view.component.TodoComponent'
		
	,	parent: todo.view.component.UiComponent
	
	,	constructor: function TodoComponent ()
		{
			this.initDom('#todoapp');
			this.initChildren();
		}
	}
	
,	{
		initChildren: function ()
		{
			this.newTodoField= this.child('#new-todo');
			this.markAllCheckbox= this.child('#toggle-all');
			this.clearCompleted= this.child('#clear-completed');
			this.todoCountDiv= this.child('#todo-count');
			this.todoList= this.child('#todo-list')
			
			this.newTodoField.addEventListener('keypress', this);
			this.markAllCheckbox.addEventListener('change', this);
		}
		
	,	handleEvent: function (domEvent)
		{
			switch (domEvent.type)
			{
				case 'keypress':
					this.onNewTodoFieldKeyup(domEvent);
					break;
				
				/*
				 * The mark all as complete checkbox has been
				 * ticked-
				 */
				case 'change':
					this.markAllTodos(this.markAllCheckbox.checked);
			}
		}
		
	,	markAllTodos: function (checked)
		{
			var checkboxes= this.children('input[type=checkbox]')
			for (var i= 0, n= checkboxes.length; i<n; i++)
			{
				checkboxes[i].checked= checked;	
			}
		}
		
	,	addTodo: function (todoVo)
		{
			
		}
		
	,	createNewTodo: function (text)
		{
			var TodoItem= todo.view.component.TodoItem
			,	todoItem= new TodoItem({text:text})

			this.todoList.appendChild(todoItem.htmlElement);
		}
		
	,	onNewTodoFieldKeyup: function (keypressEvent)
		{
			if (13 !== keypressEvent.keyCode) // only listen for the Enter key
				return;
				
			var todoText= this.newTodoField.value.trim()
			if (todoText) // don't create a new todo if there is no text
				this.createNewTodo(todoText);

			this.newTodoField.value= ''; // reset the field
		}
		
	,	dispose: function ()
		{
			this.markAllCheckbox.removeEventListener('change', this);
			this.newTodoField.removeEventListener('keypress', this);
		}
	}
);
