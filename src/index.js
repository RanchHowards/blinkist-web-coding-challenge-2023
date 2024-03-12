import "./styles.css";
import {
  trackPageview,
  trackEvent,
  createId,
  setVariant,
} from "./analytics-api.js";

const tempId = localStorage.getItem("tempId") ?? createId();
const postType = localStorage.getItem("post") ?? setVariant();

const url = window.location.href;

trackPageview({ url, id: tempId });

document.getElementById(postType).style.display = "block";
document
  .getElementById("signup")
  .addEventListener("click", () => trackEvent({ url, event: "signup" }));
