import { 
  useState, 
  useEffect 
} from "react";

import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { routeName } from "./../Utils/route";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Web(props) {
  const { t } = useTranslation();
  const location = useLocation();

  const [route,setRoute] = useState(null);
  const settings = useSelector((state) => state.settings.value);

  useEffect(() => {
    setRoute(routeName(
        location?.pathname ?? routeName("/")
    ));
  }, [location])

  return (
    <>
      <Helmet>
        {/* Here we handle any changes to the document head. */}
        <title>{t(settings.app.name)+" | "+t(route)}</title>
      </Helmet>

      {/* Children */}
      {props.children}
    </>
  );
}
