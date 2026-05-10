import "./styles.css";
import { sidebar, main } from "./dom.js";

const container = document.querySelector(".container");
container.append(sidebar, main);
