import ReactOnRails from "react-on-rails";

import App from "../bundles/newco_site/components/App";
import HelloWorld from "../bundles/HelloWorld/components/HelloWorld";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App
});
