export const createIframe = (id: string, url: string, callback: () => void) => {
  const iframe = window.document.createElement('iframe');
  iframe.id = id;
  iframe.src = url;
  iframe.onload = () => {
    callback();
  };

  return iframe;
};

export const loadIframe = (id: string, url: string, func: () => void) => {
  const frameStyle = {
    display: 'none',
    position: 'absolute',
    top: '-999px',
    left: '-999px',
  };

  const iframe = window.document.createElement('iframe');
  iframe.id = id;

  Object.keys(frameStyle).forEach(key => {
    iframe.style[key] = frameStyle[key];
  });

  iframe.src = url;
  iframe.onload = () => {
    func();
  };

  window.document.body.appendChild(iframe);
};
