/**
 * @class todo.controller.PrepareViewCommand
 * 
 * Setups up the application views and mediators
 */
puremvc.define
(
	{
		name: 'todo.controller.PrepareViewCommand'
	,	parent: puremvc.SimpleCommand
	}
	
,	{
		/** @override */
		execute: function (note)
		{
			var TodoApp					= todo.view.component.TodoApp
			,	TodoAppMediator			= todo.view.mediator.TodoAppMediator
			,	TodoListMediator		= todo.view.mediator.TodoListMediator
			,	TodoStatsMediator		= todo.view.mediator.TodoStatsMediator
			,	TodoCreatorMediator		= todo.view.mediator.TodoCreatorMediator
			,	todoApp					= new TodoApp(note.getBody())

			this.facade.registerMediator(new TodoAppMediator(todoApp));
			this.facade.registerMediator(new TodoListMediator(todoApp.todoList));
			this.facade.registerMediator(new TodoStatsMediator(todoApp.todoStats));
			this.facade.registerMediator(new TodoCreatorMediator(todoApp.todoCreator));

		}
	}
);
