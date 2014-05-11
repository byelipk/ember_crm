Crm.Messagable = Ember.Mixin.create({

    init: function() {
        this._super();
        this.set('successMessages', []);
        this.set('errorMessages', []);
    },

    actions: {

        addSuccessMessage: function(msg) {
            this.get('successMessages').pushObject(msg);
        },
        dismissSuccessMessages: function() {
            this.get('successMessages').clear();
        },
        addErrorMessage: function(msg) {
            this.get('errorMessages').pushObject(msg);
        },
        dismissErrorMessages: function() {
            this.get('errorMessages').clear();
        },
        dismissAllMessages: function() {
            this.get('successMessages').clear();
            this.get('errorMessages').clear();
        }
    }
});
