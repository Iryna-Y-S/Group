var StudentEditView = Backbone.View.extend({
	
	events: {
	    "click #edit_student": "saveStudent",
		"click #back": "goBack"
	},
	
    initialize: function () { 
	    this.$el = $("#common"); 
        this.template = _.template($("#person_input_tmp").html());
		mediator.sub("StudentEditView:open", this.render, this);
    },

    render: function (student) {
	    this.model = student;
	    this.$el.html(this.template(this.model.toJSON())); 
		$("#main").addClass("hidden");
	    this.$el.find("#person_input").removeClass("hidden");
	},
    
	saveStudent: function () {
	    var values = {},
            $inputs = $("#person_input").find("input"),
			key = [];	
		
	    _.each($inputs, function(input, i) {
		    key[i] = input.id;
			values[key[i]] = input.value;
		});	
		
		this.model.set(values);
        this.model.save();
		$("#main").removeClass("hidden");
	    this.$el.find("#person_input").addClass("hidden");
	},

    goBack: function () {
	    $("#main").removeClass("hidden");
	    this.$el.find("#person_input").addClass("hidden");	 
	}
	
});