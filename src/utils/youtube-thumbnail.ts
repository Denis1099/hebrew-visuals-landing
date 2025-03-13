
/**
 * Loads the best available thumbnail for a YouTube video
 */
export async function loadBestThumbnail(videoId: string): Promise<string> {
  try {
    const img = new Image();
    img.src = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
    
    return new Promise((resolve) => {
      img.onload = () => {
        if (img.width !== 120) { // If high quality thumbnail exists
          resolve(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
        } else {
          resolve(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
        }
      };
      img.onerror = () => {
        resolve(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
      };
    });
  } catch {
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }
}
