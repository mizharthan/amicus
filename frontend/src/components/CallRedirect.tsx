import { useEffect } from "react";

const CallRedirect = () => {
  useEffect(() => {
    window.location.href = "https://demo.daily.co/hello";
  }, []);

  return null;
};

export default CallRedirect;
