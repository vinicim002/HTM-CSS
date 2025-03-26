const bg = document.querySelector('body');
const btn = document.querySelector('button');
const respCor = document.querySelector('#cor');

const namedColors = [
    "black", "silver", "gray", "white", "maroon", "red", "purple", "fuchsia",
    "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua",
    "orange", "aliceblue", "antiquewhite", "aquamarine", "azure", "beige",
    "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue",
    "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk",
    "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray",
    "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange",
    "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",
    "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen",
    "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush",
    "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan",
    "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon",
    "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue",
    "lightyellow", "limegreen", "linen", "magenta", "mediumaquamarine",
    "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue",
    "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace", "olivedrab",
    "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
    "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum",
    "powderblue", "rosybrown", "royalblue", "saddlebrown", "salmon",
    "sandybrown", "seagreen", "seashell", "sienna", "skyblue", "slateblue",
    "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato",
    "turquoise", "violet", "wheat", "whitesmoke", "yellowgreen"
  ];
  
window.addEventListener('load', () => {
    const color = randomColor();
    bg.style.backgroundColor = color;
    respCor.innerText = `${color}`;
})

btn.addEventListener('click', () => {
    const color = randomColor();
    bg.style.backgroundColor = color;
    respCor.innerText = `${color}`;
})

const randomColor = () => {
    return namedColors[Math.floor(Math.random() * namedColors.length)];
}
