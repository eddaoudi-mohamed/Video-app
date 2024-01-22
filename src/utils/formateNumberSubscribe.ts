export function formatSubscriberCount(subscriberCount: number): string {
  // Check if the subscriberCount is greater than or equal to a million
  if (subscriberCount >= 1000000) {
    const millionCount = subscriberCount / 1000000;
    return millionCount.toFixed(1) + "M";
  }

  // Check if the subscriberCount is greater than or equal to a thousand
  if (subscriberCount >= 1000) {
    const thousandCount = subscriberCount / 1000;
    return thousandCount.toFixed(1) + "K";
  }

  // For subscriber counts less than a thousand
  return subscriberCount.toString();
}
