import { useEffect } from "react";

function useDocumentTitle(title: any) {
  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);
}

export default useDocumentTitle;
