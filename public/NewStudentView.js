var NewStudentView = Backbone.View.extend({
		
	events: {
	    "click #save_student": "addStudent",
	    "click #back": "goBack"
	},
	
    initialize: function () { 
	    this.$el = $("#common");
        this.template = $("#new_student_tmp").html();
		mediator.sub("NewStudentView:open", this.render, this);
    },

    render: function () {	    
	    this.$el.html(this.template); 
		$("#main").addClass("hidden");
	},

	addStudent: function () {
	    var values = {},	    
            $inputs = this.$el.find("input"),
			key = [];
			
		this.model = new Person();
	
	    _.each($inputs, function(input, i) {
		    key[i] = input.id;
			values[key[i]] = input.value;
		});	
        
	    this.model.set(values);
		this.model.save();
		mediator.pub("NewStudentView:add", this.model);
		
	    $("#person_input").addClass("hidden");
		$("#main").removeClass("hidden");
	},

    goBack: function () {
	    $("#person_input").addClass("hidden");
		$("#main").removeClass("hidden");	 
	}
}); 
