export function formatViewCount(viewCount: number): string {
  // Check if the viewCount is greater than or equal to a billion
  if (viewCount >= 1000000000) {
    const billionCount = viewCount / 1000000000;
    return billionCount.toFixed(1) + "B";
  }

  // Check if the viewCount is greater than or equal to a million
  if (viewCount >= 1000000) {
    const millionCount = viewCount / 1000000;
    return millionCount.toFixed(1) + "M";
  }

  // Check if the viewCount is greater than or equal to a thousand
  if (viewCount >= 1000) {
    const thousandCount = viewCount / 1000;
    return thousandCount.toFixed(1) + "K";
  }

  // For view counts less than a thousand
  return viewCount.toString();
}
