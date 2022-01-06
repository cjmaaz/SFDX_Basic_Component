spinnerFlag = true;
noExistingRecurr = false;
selectedList = [];

handleAllSelect(e) {
  let AllSelect = this.template.querySelectorAll('lightning-input.eachSelect');
  if (e.target.checked) {
      this.selectedList = [];
      AllSelect.forEach(eachSelect => {
          eachSelect.checked = true;
      })
      // ORIGINAL ARRAY RECEIVIED FROM APEX \/
      /*this.allTechWorkObj.forEach(eachRecurr => {
          this.selectedList.push(eachRecurr.key);
      })*/
  } else {
      AllSelect.forEach(eachSelect => {
          eachSelect.checked = false;
      })
      this.selectedList = [];
  }
}
handleSelect(e) {
  if (e.target.checked) {
      this.selectedList.push(e.target.name);
  } else {
      this.selectedList = this.selectedList.filter(ele => ele !== e.target.name);
  }
  console.log(this.selectedList);
  let AllSelect = this.template.querySelector('lightning-input.allChecked');
  if (2 === this.selectedList.length) {
      AllSelect.checked = true;
  } else {
      AllSelect.checked = false;
  }
}
connectedCallback() {
  spinnerFlag = false;
  noExistingRecurr = true;
}
