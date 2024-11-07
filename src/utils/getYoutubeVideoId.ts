export const getYoutubeVideoId = (url = '') => {
  if (url.includes('youtu.be')) {
    const splited = url.split('/');
    return splited[splited.length - 1];
  }
  if (url.includes('youtube.com')) {
    const {searchParams} = new URL(url);
    return searchParams.get('v');
  }
  return null;
};
