import { set } from "lodash";
/**
 * Tracks a pageview to our "imaginary api" - in this demo just the browser console. ;)
 * Send as params whatever you might seem valuable to send.
 * The URL is probably a good start though.
 */
export const trackPageview = ({ url }) => {
  saveData({ url, event: "pageview" });
};

/**
 * Tracks an event to our "imaginary api" - in this demo just the browser console. ;)
 * Send as params whatever you might seem valuable to send.
 * The URL and an event name are probably a good start though.
 */
export const trackEvent = ({ url, event }) => {
  saveData({ url, event });
};

export const createId = () => {
  const tempId = Math.floor(Math.random() * 100_000).toString();
  localStorage.setItem("tempId", tempId);
  return tempId;
};

const saveData = ({ url, event }) => {
  const userData = JSON.parse(localStorage.getItem("data")) ?? {};
  const eventCount = userData?.[url]?.[event];
  if (!eventCount) {
    set(userData, [url, event], 1);
  } else {
    userData[url][event]++;
  }
  localStorage.setItem("data", JSON.stringify(userData));
};

const postTypes = ["control", "test"];
export const setVariant = () => {
  const postType = postTypes[Math.floor(Math.random() * 2)];
  localStorage.setItem("post", postType);
  return postType;
};
