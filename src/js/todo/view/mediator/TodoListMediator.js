puremvc.define
(
	{
		name: 'todo.view.mediator.TodoListMediator'
	,	parent: todo.view.mediator.ComponentMediator
	}
	
,	{
	
		listNotificationInterests: function ()
		{
			return [
				todo.AppConstants.TODO_CREATED
			,	todo.AppConstants.TODO_DELETED
			]
		}
		
	,	handleNotification: function (note)
		{
			console.info('TodoListMediator#handleNotification', this, note);
			switch (note.getName())
			{
				case todo.AppConstants.TODO_CREATED:
				
					var TodoItem= todo.view.component.TodoItem
					,	todoVo= note.getBody()

					this.viewComponent.addTodo(new TodoItem(todoVo));
				
					break;
					
				case todo.AppConstants.TODO_DELETED:
					break;
				
			}
		}
		
	,	handleEvent: function (domEvent)
		{
			console.info('TodoListMediator#handleEvent', this, domEvent);
		}
	
	,	onRegister: function ()
		{
			var TodoList= todo.view.component.TodoList
			,	TodoItem= todo.view.component.TodoItem
			,	todoList= this.viewComponent
			
			todoList.addEventListener(TodoList.TODO_ADDED, this);
			todoList.addEventListener(TodoList.TODO_REMOVED, this);
			todoList.addEventListener(TodoItem.EDIT, this);
			todoList.addEventListener(TodoItem.REMOVE, this);
		}
	}
	
,	{
		NAME: 'todoListMediator'
	}
);
