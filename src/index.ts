import { translate } from "google-translate-api-browser";

translate("愛してる", { from: "ja", to: "en" })
  .then(res => {
    // I do not eat six days
    console.log(res.text)
  })
  .catch(err => {
    console.error(err);
  });;
