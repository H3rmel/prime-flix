import { ErrorLayout } from "@/layouts/ErrorLayout";

import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  return <ErrorLayout pageTitle={error.message}>{error.message}</ErrorLayout>;
};
