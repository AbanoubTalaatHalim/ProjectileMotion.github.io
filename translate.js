/**
 * Translation Section
 */

en_translations = {
    "language": "Language",
    "velocity": "Velocity",
    "angle": "Angle",
    "height": "Height",
    "launch": "Launch",
    "reset": "Reset",
    "coordinate": "Coordinate",
    "value": "Value",
    "x": "x",
    "y": "y"
}

ar_translations = {
    "language": "اللغة",
    "velocity": "السرعة",
    "angle": "الزاوية",
    "height": "الارتفاع",
    "launch": "اطلق",
    "reset": "إعادة",
    "coordinate": "احداثيات",
    "value": "القيمة",
    "x": "س",
    "y": "ص"
}

i18next.init({
    lng:'en',
    fallbackLng: ['en', 'ar'],
    languages : ["en", "ar"],
    resources: {
      en: {
        translation: {
            "language": "Language",
            "velocity": "Velocity",
            "angle": "Angle",
            "height": "Height",
            "launch": "Launch",
            "reset": "Reset",
            "coordinate": "Coordinate",
            "value": "Value",
            "x": "x",
            "y": "y"
        }
      },
       ar : {
           translation: {
            "language": "اللغة",
            "velocity": "السرعة",
            "angle": "الزاوية",
            "height": "الارتفاع",
            "launch": "اطلق",
            "reset": "إعادة",
            "coordinate": "احداثيات",
            "value": "القيمة",
            "x": "س",
            "y": "ص"
        }
       }
    }
  }, function(err, t) {
    if (err) return console.log('something went wrong loading', err);
    console.log("first")
    console.log(t("value"));
    document.getElementById("langs").addEventListener("change", function(){
        let lang = document.getElementById("langs").value;
        console.log(lang);
        if(lang === 'ar'){
            document.getElementsByTagName("body")[0].dir = "rtl";
        }else{
            document.getElementsByTagName("body")[0].dir = "ltr";
        }
        i18next.changeLanguage(lang, translateVisual);
    })
  });

  
  function translateVisual(err,t){
      document.getElementById("label_langs").innerText = t("language");
      console.log("something")
      console.log(t("language"));
      document.getElementById("label_velocity").innerText = t("velocity");
      document.getElementById("label_angle").innerText = t("angle");
      document.getElementById("label_height").innerText = t("height");
      document.getElementById("simulate").value = t("launch");
      document.getElementById("resetSimulation").value = t("reset");
      document.getElementById("label_coordinate").innerText = t("coordinate");
      document.getElementById("label_value").innerText = t("value");
      document.getElementById("label_x").innerText = t("x");
      document.getElementById("label_y").innerText = t("y");
  }