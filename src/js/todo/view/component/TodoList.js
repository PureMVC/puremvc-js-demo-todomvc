puremvc.define
(
	{
		name: 'todo.view.component.TodoList'
	,	parent: todo.view.component.UiComponent
	,	constructor: function TodoList (domReference)
		{
			console.info('constructor', this, arguments);
			this.initDom(domReference);
		}
	}
	
,	{
		addTodo: function (todoItem)
		{
			this.htmlElement.appendChild(todoItem.htmlElement);
			this.dispatchEvent(this.createEvent(this.constructor.TODO_ADDED));
		}
		
	,	removeTodo: function (todoItem)
		{
			this.htmlElement.removeChild(todoItem.htmlElement);
		}
		
	,	removeTodoById: function (todoId)
		{
			var todoElement= this.child(todoId)
			this.htmlElement.removeChild(this.child(todoId));
			this.dispatchEvent(this.createEvent(this.constructor.TODO_REMOVED));
		}
		
	,	selectAllTodos: function (checked)
		{
			var listItems= this.children('li')
			,	listItem
			for (var i= 0, n= listItems.length; i < n; i++)
			{
				listItem= listItems[i];
				console.dir(listItem);
				listItem.codeBehind.setSelected(checked);
			}
		}
	}
	
,	{
		TODO_ADDED: 'todoListItemAdded'
	,	TODO_REMOVED:'todoListItemRemoved'
	}
);
