export function isSafariMenuClosed(
  innerHeight: number,
  outerHeight: number
): boolean {
  const diff = outerHeight - innerHeight;

  if (diff <= 65) {
    return true;
  }
  return false;
}
