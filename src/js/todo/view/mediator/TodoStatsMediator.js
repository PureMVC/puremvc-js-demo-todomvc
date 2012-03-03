puremvc.define
(
	{
		name: 'todo.view.mediator.TodoStatsMediator'
	,	parent: todo.view.mediator.ComponentMediator
	}
	
,	{
		onRegister: function ()
		{
			console.info('TodoStatsMediator#onRegister', this)
		}
	}
	
,	{
		NAME: 'todoStatsMediator'
	}
);
