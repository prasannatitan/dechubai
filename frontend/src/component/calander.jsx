/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function calander() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="30min" className="text-sm cursor-pointer"
    data-cal-link="prasanna-dechubai/30min"
    
    data-cal-config='{"layout":"month_view"}'
  >Schedule Meet</button>;
};
  