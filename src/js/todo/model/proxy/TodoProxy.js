/**
 * @class todo.model.proxy.TodoProxy
 */
puremvc.define
(
	{
		name: 'todo.model.proxy.TodoProxy'
	,	parent:	puremvc.Proxy	
	}
	
,	{
		todoMap: null
		
	,	loadTodos: function ()
		{
			throw new Error ('Not implemented')	
		}
		
	,	saveTodos: function ()
		{
			throw new Error ('Not implemented')	
		}
		
	,	refreshTodos: function ()
		{
			this.saveTodos();
			this.loadTodos();
		}
		
	,	createTodo: function (text)
		{
			// partial implemtnation
			var todoVo= new todo.model.vo.TodoVo;
			todoVo.id= Date.now();
			todoVo.text= text;
			
			// persist it
			
			// notify the app that its been created
			this.sendNotification(todo.AppConstants.TODO_CREATED, todoVo);
			console.info('createTodo', todo.AppConstants.TODO_CREATED, todoVo)
		}
		
	,	addTodo: function (todo)
		{
			// what about duplicate todos?
			this.todoMap[todo.id]= todo;
			this.saveTodos();
		}
		
	,	editTodo: function (todoId, content)
		{
			var found= this.findTodoById(todoId);
			if (found.exists)
			{
				found.value.content= text;
			}
		}
		
	,	removeTodoById: function (id)
		{
			var todo= this.findTodoById(id);
			if (todo.exists)
			{
				this.todos.splice(todo.index);
			}
		}
		
	,	removeTodosDone: function ()
		{
			this.todos= this.todos.filter(function (todo){
				return !todo.done;
			});
		}
		
	,	getTodoById: function (id)
		{
			var found= this.findTodoById(id);
			if (found.exists)
				return found.value;
				
			// throw ReferenceError	
		}
		
	,	findTodoById: function (id)
		{
			var todos= this.todos
			,	todo
			for (var i= 0, n= todos.length; i < n; i++)
			{
				todo= todos[i];
				if (id === todo.id)
				{
					return {key:id,exists:true,value:todo,index:i};
				}
			}
			
			return {key:id, exists:false, index:-1};
		}
	}
)
