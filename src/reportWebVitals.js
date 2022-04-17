<<<<<<< HEAD
const reportWebVitals = (onPerfEntry) => {
=======
const reportWebVitals = onPerfEntry => {
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
