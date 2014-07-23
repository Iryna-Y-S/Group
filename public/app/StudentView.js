var StudentView = Backbone.View.extend({

	tagName: "li",
	
	template: _.template("<%= name %> <%= surname %> <button id = 'button'>Delete</button>"),
	
	events: {
	    "click #button": "deleteStudent",
        "click ": "editStudent"	
    },

    render: function () {
	    this.$el.html(this.template(this.model.toJSON()));	
		this.model.off("change");
		return this;
	},
	
	editStudent: function () {
	    var person = this.model,
		    edit_view = new StudentEditView({model: person});	
	    this.model.on("change", this.render, this);
	},
	
	deleteStudent: function (e) {
	    e.stopPropagation();
	    this.model.destroy();
		this.$el.remove();
		mediator.pub("StudentView:delete");
	}
	
});
