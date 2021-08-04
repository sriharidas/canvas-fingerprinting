const date = new Date();
const timezone = `GMT+${parseInt((date.getTimezoneOffset() / 60) * -1)}:${
  (date.getTimezoneOffset() / 60 - parseInt(date.getTimezoneOffset() / 60)) *
  60 *
  -1
}`;
let browserData = {
  token: hashCode,
  currentWindow: {
    host: window.location.host,
    hostname: window.location.hostname,
    href: window.location.href,
    origin: window.location.origin,
    protocol: window.location.protocol,
    port: window.location.port,
    WindowName: window.name,
  },
  browser: {
    appCodeName: window.navigator.appCodeName,
    appName: window.navigator.appName,
    appVersion: window.navigator.appVersion,
  },
  userAgent: {
    userAgent: window.navigator.userAgent,
    userAgentData: {
      brand: window.navigator.userAgentData.brands,
      mobile: window.navigator.userAgentData.mobile,
      vendor: window.navigator.userAgentData.vendor,
    },
  },
  screen: {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
    fullScreen: window.fullScreen,
  },
  geolocation: "",
  timezone: timezone,
  platform: window.navigator.platform,
  languages: window.navigator.languages,
  plugins: window.navigator.plugins,
};

window.navigator.geolocation.getCurrentPosition(
  (success) => {
    let geolocationCoords = success.coords;
    browserData.geolocation = {
      latitude: geolocationCoords.latitude,
      longitude: geolocationCoords.longitude,
    };
    // console.log(geolocationCoords);

    return success;
  },
  (err) => err
);

console.log(browserData);
