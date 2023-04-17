import createHeader from "./header";
import createHome from "./home";

function loadPage() {
  createHome();

  createHeader();
}

export default loadPage;
