export function formatSocialMediaDate(dateString: string) {
  const currentDate = new Date();
  const postDate = new Date(dateString);

  const timeDifference = currentDate.getTime() - postDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return `Just now`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 7) {
    return `${days} days ago`;
  } else {
    // Format the date for older posts
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as const;
    return postDate.toLocaleDateString(undefined, options);
  }
}
