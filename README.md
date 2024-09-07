# Welcome to CPU Gregorian Chant!

CPU Gregorian Chant is a web application that procedurally generates Gregorian Chant. It generates music in all eight Gregorian modes and provides theoretical information so users can hear, see, and read about the differences in Gregorian modes. The application includes articles on notation, modes and history as well as a bibliography.

**Link to site:** https://cpu-gregorian-chant.com/

![](/assets/readme/welcome.GIF)

## How It's Made

**Tech used:**
<br>
• HTML
<br>
• CSS
<br>
• JavaScript and various libraries
<br>
• Python

**Libraries used:**
<br>
• [Exsurge.js](https://github.com/frmatthew/exsurge) for the rendering of Gregorian Chant notation
<br>
• [Tone.js](https://tonejs.github.io/) for the production of sound
<br>
• [Pyscript](https://pyscript.net/) for the communication of Python and Javascript
<br>
• [Bootstrap](https://getbootstrap.com/)/[jQuery](https://jquery.com/) for the functionality of the buttons

## Cross-browser functionality

The project uses two separate versions of exsurge. The reason for this is that one version, the one I developed with for nearly the entire duration of the development period, is very visually appealing and easy to work with, as the chant elements are perfectly spaced and each svg element has a very specific class name with the respective chant element (PorrectusFlexus, TorculusResupinus, etc.). The problem with this version is that the clefs do not render on Chromium-based browsers! I discovered this while presenting the project to the faculty panel at my university (but no one could tell)! This issue is strange and perplexing, but I believe I know what causes this. The clef is defined last in the `<defs>` section of the svg, and I think that is the source of this weird issue. I was unable to fix it, but another version of exsurge is fully compatible with all browsers, so detecting the user's browser and loading the appropriate version of exsurge seemed to be the simplest fix.

Why didn't I opt to use this new, more compatible version of exsurge for all versions? There are a couple of reasons, reason one being that the specification of chant elements by class name allowed me to very easily display information on the hover of each chant element i.e. display "Porrectus Flexus: a four-note neume that is a porrectus with a low note at the end" when the user hovers over a porrectus flexus. This is possible on the alternate version, but it would require far more effort. Reason two is that the less compatible version is more visually appealing. The chant elements are flawlessly spaced, whereas the elements on the more compatible version are very condensed. Additionally, the way that chant elements are defined in version one allows the complete neume (punctums and lines, accidentals, etc.) to illuminate together, whereas the compatible version illuminates only the punctums and leaves neume lines the default black. I figured that it was best to use the superior but less compatible version of exsure for the browsers that support it (Firefox and Safari).

<table>
  <tr>
    <td>![](/assets/readme/exsurge-1.png)</td>
    <td>![](/assets/readme/exsurge-2.png)</td>
  </tr>
  <tr>
    <tr>exsurge version 1</td>
    <tr>exsurge version 2</td>
  </tr>
</table>