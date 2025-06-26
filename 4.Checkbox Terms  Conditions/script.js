const checkBox = document.getElementById('agree');
const submitBtn = document.getElementById('btn');

submitBtn.addEventListener('change', ()=>{
    submitBtn.disabled = ! checkBox.checked;
})