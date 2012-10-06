/**
 * @author Mike Britton
 * 
 * @class PrepModelCommand
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 */
puremvc.define({
        name: 'todomvc.controller.command.PrepModelCommand',
        parent: puremvc.SimpleCommand
    },
  
    // INSTANCE MEMBERS
    {
        /** @override */
        execute: function (note)
        {
            this.facade.registerProxy( new todomvc.model.proxy.TodoProxy() );
        }
    }    
);
