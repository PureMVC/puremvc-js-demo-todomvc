/**
 * @class todo.controller.CreateTodoCommand
 * Collaborates with TodoProxy to create new TodoVo's'
 */
puremvc.define
(
	{
		name: 'todo.controller.CreateTodoCommand'
	,	parent: puremvc.SimpleCommand
	}
	
,	{
		/** @override */
		execute: function (note)
		{
			var todoText= note.getBody()
			,	todoModel= this.facade.retrieveProxy(todo.model.proxy.TodoProxy.NAME);
			
			todoModel.createTodo(todoText);
		}
	}
)
