// تغيير اللغة
function setLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-ar]').forEach(el=>{
        el.textContent = (lang==='ar')? el.dataset.ar : el.dataset.en;
    });
}
