({
	fetchLineItems : function(component, event, helper) {
        return new Promise($A.getCallback(function(resolve, reject){
            var recordId = component.get('v.recordId');
            var action = component.get('c.fetchPTLI');
            action.setParams({recID:recordId});
            action.setCallback(this,function(response){
                var state = response.getState();
                if(state === "SUCCESS") {
                    resolve(response.getReturnValue());
                }
                else{
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            reject("Error message: " + errors[0].message);
                        }
                    } else {
                        reject("Unknown error");
                    }
                }
            });
            $A.enqueueAction(action);
        }));
    }
})
