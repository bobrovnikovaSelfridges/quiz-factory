import { getSearchParamsFromQueryString } from "./get-search-params-from-query-string";
import { QueryParams } from "../store/types";

export function setParamsForUrl(params: string[]): void {
  const queryParams = formatToQueryParams(params);
  const updatedSearchParams = getUpdatedSearchParams(queryParams);
  const updatedUrl = getUpdatedUrl(updatedSearchParams);
  // url updates
  return window.history.replaceState({ path: updatedUrl }, "", updatedUrl);
}

const formatToQueryParams = (values: string[]): QueryParams => {
  const params: QueryParams = {};
  values.forEach((value: string, i: number) => {
    params["gifts_" + i] = value;
  });
  return params;
};

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
