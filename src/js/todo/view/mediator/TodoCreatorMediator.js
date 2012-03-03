puremvc.define
(
	{
		name: 'todo.view.mediator.TodoCreatorMediator'
	,	parent: todo.view.mediator.ComponentMediator
	}
	
,	{
		handleEvent: function (domEvent)
		{
			this.sendNotification(todo.AppConstants.CREATE_TODO, domEvent.text);
		}
	
	,	onRegister: function ()
		{
			var TodoCreator= todo.view.component.TodoCreator
			this.viewComponent.addEventListener(TodoCreator.TODO_CREATED, this);
		}
	}
	
,	{
		NAME: 'todoCreatorMediator'
	}
)