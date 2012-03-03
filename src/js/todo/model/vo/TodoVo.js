puremvc.define
(
	{
		name: 'todo.model.vo.TodoVo'
	,	constructor: function TodoVo (name, id, text, done)
		{
			this.name= name;
			this.done= done;
			this.text= text;
		}
	}
);
