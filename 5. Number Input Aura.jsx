// Aura
<lightning:input name="Number" label="Number Input" type="number" value="{!v.number}" pattern="[0-9]*" message-when-pattern-mismatch="Special Characters not allowed" onkeyup="{!c.numberValidation}" />
  
// Controller
adjustQuantity: function (component, event, helper) {
  let num = component.get("v.number");
  num = num.replace(/^0+/, '');
  console.log(num);
  component.set("v.eachproductsList.ToOrder", parseInt(num));
}
