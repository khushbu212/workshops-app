let lstrUrl = window.location.search;
let urlParams = new URLSearchParams(lstrUrl);  

const lstrName = urlParams.get('Name');
const lstrId = urlParams.get('Id');
console.log(lstrName);
console.log(lstrId);

document.getElementById('workshop-name').innerHTML = lstrName;