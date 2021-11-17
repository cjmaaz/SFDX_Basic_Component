({
	startSpinner: function(component, event, helper){
        component.set('v.Spinner',true);
        window.setTimeout(
        	$A.getCallback(function() {
                component.set('v.Spinner',false);
            }), 4000);
    },
})
