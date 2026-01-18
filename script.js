function setLang(lang) {
  if (lang === "en") {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    alert("English version coming soon");
  } else {
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";
  }
}
