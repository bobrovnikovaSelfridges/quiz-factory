export function getSearchParamsFromQueryString(): URLSearchParams {
  const paramsString = window.location.search.substring(1)
  return new URLSearchParams(paramsString)
}
