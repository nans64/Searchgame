import "../sass/styles.scss";
import routes from "./route";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import PlatformSelect from "./PlatformSelect";
import PageForm from "./PageForm";

const setRoute = () => {
  let platform;
  let developer;
  let page_size = 9;
  let path = window.location.hash.substring(1).split("/");
  let pageArgument = path[1] || "";
  if (path[1] && path[1].includes("?")) {
    let cleanpath = path[1].split("?");

    let queryString = cleanpath[1];
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    platform = urlParams.get("platforms");
    developer = urlParams.get("developers");
    pageArgument = cleanpath[0];
  }

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument, platform, developer, page_size);

  PageForm(platform, developer);

  if (path[0] == "" || path[0] == "pagelist") {
    PlatformSelect(pageArgument, developer);
  }
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
