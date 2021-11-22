({
    doInit : function(component, event, helper) {
        var dataPromise = helper.fetchLineItems(component, event, helper);
        dataPromise.then($A.getCallback(function(results){
            var i = 0;
            results.forEach((eachLI)=>{
                eachLI.isChecked = false;
                i++;
            });
            component.set('v.totalRecordsCount', i);
            console.log(JSON.stringify(results));
            component.set('v.ListPTLI',results);
            component.set('v.Spinner',false);
    	})).catch(function(error){
            component.set('v.Spinner',false);
      });
    },
    checkboxSelect: function(component, event, helper) { 
        var selectedRec = event.getSource().get("v.value");
        var getSelectedNumber = component.get("v.selectedCount");
        if (selectedRec == true) {
            getSelectedNumber++;
        } else {
            getSelectedNumber--;
            component.find("selectAllId").set("v.value", false);
        }
        component.set("v.selectedCount", getSelectedNumber);
        if (getSelectedNumber == component.get("v.totalRecordsCount")) {
            component.find("selectAllId").set("v.value", true);
        }
    },
    selectAllCheckbox: function(component, event, helper) {
        var selectedHeaderCheck = event.getSource().get("v.value");
        var updatedAllRecords = [];
        var ListPTLI = component.get("v.ListPTLI");
        for (var i = 0; i < ListPTLI.length; i++){
            if (selectedHeaderCheck == true) {
                ListPTLI[i].isChecked = true;
            } else {
                ListPTLI[i].isChecked = false;
            }
            updatedAllRecords.push(ListPTLI[i]);
        }
        component.set("v.ListPTLI", updatedAllRecords);
    }
})
