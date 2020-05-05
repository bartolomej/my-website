import fractal1 from '../assets/gallery/small/fractal1.jpeg';
import fractal2 from '../assets/gallery/small/fractal2.png';
import fractal3 from '../assets/gallery/small/fractal3.png';
import fractal4 from '../assets/gallery/small/fractal4.png';
import sunrise from '../assets/gallery/small/sunrise.jpg';
import wedding from '../assets/gallery/small/wedding.jpg';
import landscape from '../assets/gallery/small/landscape.jpg';
import fire from '../assets/gallery/small/fire.jpg';
import tree from '../assets/gallery/small/tree.jpg';
import modrej from '../assets/gallery/small/modrej.jpg';
import mountains from '../assets/gallery/small/mountains.jpg';
import capricorn from '../assets/gallery/small/capricorn.jpg';
import lighthouse from '../assets/gallery/small/lighthouse.jpg';

export default [
  {
    "largeSrc": async () => await import("../assets/gallery/fractal1.jpeg"),
    "src": fractal1,
    "caption": "Zoomed in Julia Fractal."
  },
  {
    "largeSrc": async () => await import("../assets/gallery/fractal2.PNG"),
    "src": fractal2,
    "caption": "Twisty fractal :)"
  },
  {
    "largeSrc": async () => await import("../assets/gallery/fractal3.PNG"),
    "src": fractal3,
    "caption": "Curly fractal :)"
  },
  {
    "largeSrc": async () => await import("../assets/gallery/fractal4.PNG"),
    "src": fractal4,
    "caption": "Another fractal :)"
  },
  {
    "largeSrc": async () => await import("../assets/gallery/sunrise.jpg"),
    "src": sunrise,
    "caption": "A beautiful sunrise in Log pod Mangartom (Slovenia)."
  },
  {
    "largeSrc": async () => await import("../assets/gallery/landscape.jpg"),
    "src": landscape,
    "caption": "Landscape shot of a bird and Slovenian mountains in the background."
  },
  {
    "largeSrc": async () => await import("../assets/gallery/wedding.jpg"),
    "src": wedding,
    "caption": "My cousins wedding day."
  },
  {
    "largeSrc": async () => await import("../assets/gallery/fire.jpg"),
    "src": fire,
    "caption": "Bonfire night somewhere in Slovenian Alps."
  },
  {
    "largeSrc": async () => await import("../assets/gallery/tree.jpg"),
    "src": tree,
    "caption": "Forest in Slovenian Alps.",
    "orientation": "portrait"
  },
  {
    "largeSrc": async () => await import("../assets/gallery/modrej.jpg"),
    "src": modrej,
    "caption": "View over my home valley.",
  },
  {
    "largeSrc": async () => await import("../assets/gallery/capricorn.jpg"),
    "src": capricorn,
    "caption": "This animal is called 'Kozorog' in Slovenian. Guess what, that's also my last name :)",
  },
  {
    "largeSrc": async () => await import("../assets/gallery/lighthouse.jpg"),
    "src": lighthouse,
    "caption": "Lighthouse in Croatia.",
  },
  {
    "largeSrc": async () => await import("../assets/gallery/mountains.jpg"),
    "src": mountains,
    "caption": "Slovenian mountains.",
  },
]
