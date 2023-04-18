import createHeader from "./header";
import createHome from "./home";
import createMenu from "./menu";

function loadPage() {
  createHome();
  createHeader();
}

export default loadPage;
