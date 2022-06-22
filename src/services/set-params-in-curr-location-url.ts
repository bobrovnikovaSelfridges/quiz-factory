import { getSearchParamsFromQueryString } from "./get-search-params-from-query-string";
import { QueryParams } from "../store/types";

export function setParamsForUrl(queryParams: QueryParams): void {
  const updatedSearchParams = getUpdatedSearchParams(queryParams);
  const updatedUrl = getUpdatedUrl(updatedSearchParams);

  // url updates
  return window.history.replaceState({ path: updatedUrl }, "", updatedUrl);
}

// url new
function getUpdatedUrl(updatedSearchParams: object): string {
  return (
    window.location.origin +
    window.location.pathname +
    "?" +
    updatedSearchParams.toString()
  );
}

export function getUpdatedSearchParams(queryParams: QueryParams): object {
  const searchParams = getSearchParamsFromQueryString();
  // the action
  Object.entries(queryParams).forEach(([param, value]: string[]) => {
    searchParams.set(param, value);
  });
  return searchParams;
}
