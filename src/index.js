import React from 'react';

const STATES = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error'
};

function reducer(state, action) {
  switch (action.type) {
    case STATES.IDLE:
      return { state: STATES.IDLE };
    case STATES.LOADING:
      return { state: STATES.LOADING };
    case STATES.LOADED:
      return { state: STATES.LOADED, payload: action.data };
    case STATES.ERROR:
      return { state: STATES.LOADED, payload: action.error };
    default:
      throw new Error();
  }
}

export default function Picture(props) {
  const { children, placeholder, use } = props;
  const [{ state }, dispatch] = React.useReducer(reducer, { state: STATES.IDLE });
  const [isInViewport, setIsInViewport] = React.useState();
  const wrapperRef = React.useRef();

  const WrapperComponent = use || 'picture';

  let defaultImage = children;
  let sourceImages;
  if (Array.isArray(children)) {
    defaultImage = children.find(child => child.type !== 'source');
    sourceImages = children.filter(child => child.type === 'source');
  }

  React.useEffect(
    () => {
      if (!isInViewport || state === STATES.LOADED) return;

      dispatch({ type: STATES.LOADING });

      const image = new Image();

      let loadingImage = defaultImage.props;
      if (sourceImages) {
        const matchedImage = sourceImages.find(image => {
          const mediaQuery = window.matchMedia(image.props.media);
          return mediaQuery.matches;
        });
        if (matchedImage) {
          loadingImage = matchedImage;
        }
      }

      image.src = loadingImage.src;
      if (loadingImage.srcSet) {
        image.srcSet = loadingImage.srcSet;
        image.sizes = loadingImage.sizes;
      }
      image.onload = image => {
        dispatch({ type: STATES.LOADED, payload: image });
      };
      image.onerror = error => {
        dispatch({ type: STATES.ERROR, payload: error });
      };
    },
    [isInViewport]
  );

  React.useEffect(() => {
    function checkInViewport() {
      if (!wrapperRef.current) return;
      const distance = wrapperRef.current.getBoundingClientRect();
      const isInViewport = distance.top <= (window.innerHeight || document.documentElement.clientHeight);
      setIsInViewport(isInViewport);
    }

    checkInViewport();

    function handleScroll() {
      checkInViewport();
    }
    document.addEventListener('scroll', handleScroll);
    return function cleanup() {
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <WrapperComponent ref={wrapperRef} {...props}>
      {state === STATES.LOADED ? children : placeholder}
    </WrapperComponent>
  );
}
