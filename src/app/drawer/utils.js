'use client';

export function writeToStorage(data) {
	if (typeof window !== 'undefined') {
		if (typeof data !== 'object') {
			throw new Error(`Data to be written to storage is not an object but "${typeof data}"`);
		}
		localStorage.setItem('token-zen', JSON.stringify(data));
	}
}

export function getFromStorage() {
	if (typeof window !== 'undefined') {
		const locallyStored = localStorage.getItem('token-zen') || {};
		try {
			return JSON.parse(locallyStored);
		} catch (_) {
			return {};
		}
	}
}

const COLORS = {
	transparent: [0, 0, 0, 0],
	lightsalmon: [255, 160, 122, 0],
	darksalmon: [233, 150, 122, 0],
	salmon: [250, 128, 114, 0],
	lightcoral: [240, 128, 128, 0],
	indianred: [205, 92, 92, 0],
	red: [255, 0, 0, 0],
	crimson: [220, 20, 60, 0],
	firebrick: [178, 34, 34, 0],
	darkred: [139, 0, 0, 0],
	pink: [255, 192, 203, 0],
	lightpink: [255, 182, 193, 0],
	hotpink: [255, 105, 180, 0],
	deeppink: [255, 20, 147, 0],
	palevioletred: [219, 112, 147, 0],
	mediumvioletred: [199, 21, 133, 0],
	gold: [55, 215, 0, 0],
	orange: [255, 165, 0, 0],
	darkorange: [255, 140, 0, 0],
	lightsalmon: [255, 160, 122, 0],
	coral: [255, 127, 80, 0],
	tomato: [255, 99, 71, 0],
	orangered: [255, 69, 0, 0],
	lightyellow: [255, 255, 224, 0],
	lemonchiffon: [255, 250, 205, 0],
	lightgoldenrodyellow: [250, 250, 210, 0],
	yellow: [255, 255, 0, 0],
	papayawhip: [255, 239, 213, 0],
	moccasin: [255, 228, 181, 0],
	peachpuff: [255, 218, 185, 0],
	palegoldenrod: [238, 232, 170, 0],
	khaki: [240, 230, 140, 0],
	darkkhaki: [189, 183, 107, 0],
	greenyellow: [173, 255, 47, 0],
	chartreuse: [127, 255, 0, 0],
	lawngreen: [124, 252, 0, 0],
	lime: [0, 255, 0, 0],
	palegreen: [152, 251, 152, 0],
	lightgreen: [144, 238, 144, 0],
	springgreen: [0, 255, 127, 0],
	mediumspringgreen: [0, 250, 154, 0],
	limegreen: [50, 205, 50, 0],
	mediumseagreen: [60, 179, 113, 0],
	seagreen: [46, 139, 87, 0],
	forestgreen: [34, 139, 34, 0],
	green: [0, 128, 0, 0],
	darkgreen: [0, 100, 0, 0],
	yellowgreen: [154, 205, 50, 0],
	olivedrab: [107, 142, 35, 0],
	olive: [128, 128, 0, 0],
	darkolivegreen: [85, 107, 47, 0],
	mediumaquamarine: [102, 205, 170, 0],
	darkseagreen: [143, 188, 139, 0],
	lightseagreen: [32, 178, 170, 0],
	darkcyan: [0, 139, 139, 0],
	teal: [0, 128, 128, 0],
	lightcyan: [224, 255, 255, 0],
	aqua: [0, 255, 255, 0],
	cyan: [0, 255, 255, 0],
	aquamarine: [127, 255, 212, 0],
	paleturquoise: [175, 238, 238, 0],
	turquoise: [64, 224, 208, 0],
	mediumturquoise: [72, 209, 204, 0],
	darkturquoise: [0, 206, 209, 0],
	cadetblue: [95, 158, 160, 0],
	steelblue: [70, 130, 180, 0],
	lightsteelblue: [176, 196, 222, 0],
	powderblue: [176, 224, 230, 0],
	lightblue: [173, 216, 230, 0],
	skyblue: [135, 206, 235, 0],
	lightskyblue: [135, 206, 250, 0],
	deepskyblue: [0, 191, 255, 0],
	dodgerblue: [30, 144, 255, 0],
	cornflowerblue: [100, 149, 237, 0],
	mediumslateblue: [123, 104, 238, 0],
	royalblue: [65, 105, 225, 0],
	blue: [0, 0, 255, 0],
	mediumblue: [0, 0, 205, 0],
	darkblue: [0, 0, 139, 0],
	navy: [0, 0, 128, 0],
	midnightblue: [25, 25, 112, 0],
	cornsilk: [255, 248, 220, 0],
	blanchedalmond: [255, 235, 205, 0],
	bisque: [255, 228, 196, 0],
	navajowhite: [255, 222, 173, 0],
	wheat: [245, 222, 179, 0],
	burlywood: [222, 184, 135, 0],
	tan: [210, 180, 140, 0],
	goldenrod: [218, 165, 32, 0],
	darkgoldenrod: [184, 134, 11, 0],
	rosybrown: [188, 143, 143, 0],
	sandybrown: [244, 164, 96, 0],
	peru: [205, 133, 63, 0],
	chocolate: [210, 105, 30, 0],
	sienna: [160, 82, 45, 0],
	saddlebrown: [139, 69, 19, 0],
	brown: [165, 42, 42, 0],
	maroon: [128, 0, 0, 0],
	lavender: [230, 230, 250, 0],
	thistle: [216, 191, 216, 0],
	plum: [221, 160, 221, 0],
	violet: [238, 130, 238, 0],
	orchid: [218, 112, 214, 0],
	fuchsia: [255, 0, 255, 0],
	magenta: [255, 0, 255, 0],
	mediumorchid: [186, 85, 211, 0],
	mediumpurple: [147, 112, 219, 0],
	rebeccapurple: [102, 51, 153, 0],
	blueviolet: [138, 43, 226, 0],
	darkviolet: [148, 0, 211, 0],
	darkorchid: [153, 50, 204, 0],
	darkmagenta: [139, 0, 139, 0],
	purple: [128, 0, 128, 0],
	indigo: [75, 0, 130, 0],
	mediumslateblue: [123, 104, 238, 0],
	slateblue: [106, 90, 205, 0],
	darkslateblue: [72, 61, 139, 0],
	white: [255, 255, 255, 0],
	snow: [255, 250, 250, 0],
	floralwhite: [255, 250, 240, 0],
	ivory: [255, 255, 240, 0],
	honeydew: [240, 255, 240, 0],
	mintcream: [245, 255, 250, 0],
	azure: [240, 255, 255, 0],
	aliceblue: [240, 248, 255, 0],
	ghostwhite: [248, 248, 255, 0],
	whitesmoke: [245, 245, 245, 0],
	beige: [245, 245, 220, 0],
	seashell: [255, 245, 238, 0],
	oldlace: [253, 245, 230, 0],
	antiquewhite: [250, 235, 215, 0],
	linen: [250, 240, 230, 0],
	lavenderblush: [255, 240, 245, 0],
	mistyrose: [255, 228, 225, 0],
	gainsboro: [220, 220, 220, 0],
	lightgray: [211, 211, 211, 0],
	silver: [192, 192, 192, 0],
	darkgray: [169, 169, 169, 0],
	gray: [128, 128, 128, 0],
	dimgray: [105, 105, 105, 0],
	lightslategray: [119, 136, 153, 0],
	slategray: [112, 128, 144, 0],
	darkslategray: [47, 79, 79, 0],
	black: [0, 0, 0, 0],
};

export function parseColor(input) {
	if (typeof COLORS[input.toLowerCase()][0] !== 'undefined') {
		return COLORS[input.toLowerCase()];
	} else if (input.substr(0, 1) == '#') {
		var collen = (input.length - 1) / 3;
		var fact = [17, 1, 0.062272][collen - 1];
		return [
			Math.round(parseInt(input.substr(1, collen), 16) * fact),
			Math.round(parseInt(input.substr(1 + collen, collen), 16) * fact),
			Math.round(parseInt(input.substr(1 + 2 * collen, collen), 16) * fact),
		];
	} else
		return input
			.split('(')[1]
			.split(')')[0]
			.split(',')
			.map((x) => +x);
}

export function clamp(number, min, max) {
	if (number < min) return min;
	if (number > max) return max;
	return number;
}

export function roundNumberToDecimalPlaces(value, decimals) {
	const exponent = Number(`${value}e${decimals}`);
	const roundedExponent = Math.round(exponent);
	const numberWithDecimalPlaces = Number(`${roundedExponent}e-${decimals}`);
	return numberWithDecimalPlaces;
}

export function rgbString(color) {
	const { red, green, blue } = color;

	if ('alpha' in color) {
		return `rgba(${red}, ${green}, ${blue}, ${color.alpha})`;
	} else {
		return `rgb(${red}, ${green}, ${blue})`;
	}
}

export const rgbaString = rgbString;

export function rgbToHex({ red, green, blue }) {
	return `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
}

function componentToHex(component) {
	const hex = component.toString(16);
	return hex.length === 1 ? `0${hex}` : hex;
}

export function hsbToHex(color) {
	return rgbToHex(hsbToRgb(color));
}

function rgbFromHueAndChroma(hue, chroma) {
	const huePrime = hue / 60;
	const hueDelta = 1 - Math.abs((huePrime % 2) - 1);
	const intermediateValue = chroma * hueDelta;

	let red = 0;
	let green = 0;
	let blue = 0;
	if (huePrime >= 0 && huePrime <= 1) {
		red = chroma;
		green = intermediateValue;
		blue = 0;
	}

	if (huePrime >= 1 && huePrime <= 2) {
		red = intermediateValue;
		green = chroma;
		blue = 0;
	}

	if (huePrime >= 2 && huePrime <= 3) {
		red = 0;
		green = chroma;
		blue = intermediateValue;
	}

	if (huePrime >= 3 && huePrime <= 4) {
		red = 0;
		green = intermediateValue;
		blue = chroma;
	}

	if (huePrime >= 4 && huePrime <= 5) {
		red = intermediateValue;
		green = 0;
		blue = chroma;
	}

	if (huePrime >= 5 && huePrime <= 6) {
		red = chroma;
		green = 0;
		blue = intermediateValue;
	}

	return { red, green, blue };
}

export function hsbToRgb(color) {
	const { hue, saturation, brightness, alpha = 1 } = color;
	const chroma = brightness * saturation;

	let { red, green, blue } = rgbFromHueAndChroma(hue, chroma);

	const chromaBrightnessDelta = brightness - chroma;
	red += chromaBrightnessDelta;
	green += chromaBrightnessDelta;
	blue += chromaBrightnessDelta;

	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha,
	};
}

export function hslToRgb(color) {
	const { hue, saturation, lightness, alpha = 1 } = color;
	const chroma = (1 - Math.abs(2 * (lightness / 100) - 1)) * (saturation / 100);

	let { red, green, blue } = rgbFromHueAndChroma(hue, chroma);

	const lightnessVal = lightness / 100 - chroma / 2;
	red += lightnessVal;
	green += lightnessVal;
	blue += lightnessVal;

	return {
		red: Math.round(red * 255),
		green: Math.round(green * 255),
		blue: Math.round(blue * 255),
		alpha,
	};
}

// ref https://en.wikipedia.org/wiki/HSL_and_HSV
export function rgbToHsbl(color, type = 'b') {
	const { alpha = 1 } = color;

	const red = color.red / 255;
	const green = color.green / 255;
	const blue = color.blue / 255;

	const largestComponent = Math.max(red, green, blue);
	const smallestComponent = Math.min(red, green, blue);

	const delta = largestComponent - smallestComponent;
	const lightness = (largestComponent + smallestComponent) / 2;
	let saturation = 0;
	if (largestComponent === 0) {
		saturation = 0;
	} else if (type === 'b') {
		saturation = delta / largestComponent;
	} else if (type === 'l') {
		const baseSaturation =
			lightness > 0.5
				? delta / (2 - largestComponent - smallestComponent)
				: delta / (largestComponent + smallestComponent);
		saturation = isNaN(baseSaturation) ? 0 : baseSaturation;
	}

	let huePercentage = 0;
	switch (largestComponent) {
		case red:
			huePercentage = (green - blue) / delta + (green < blue ? 6 : 0);
			break;
		case green:
			huePercentage = (blue - red) / delta + 2;
			break;
		case blue:
			huePercentage = (red - green) / delta + 4;
	}

	const hue = (huePercentage / 6) * 360;
	const clampedHue = clamp(hue, 0, 360);

	return {
		hue: clampedHue ? roundNumberToDecimalPlaces(clampedHue, 2) : 0,
		saturation: roundNumberToDecimalPlaces(clamp(saturation, 0, 1), 4),
		brightness: roundNumberToDecimalPlaces(clamp(largestComponent, 0, 1), 4),
		lightness: roundNumberToDecimalPlaces(lightness, 4),
		alpha: roundNumberToDecimalPlaces(alpha, 4),
	};
}

export function rgbToHsb(color) {
	const { hue, saturation, brightness, alpha = 1 } = rgbToHsbl(color, 'b');
	return { hue, saturation, brightness, alpha };
}

export function rgbToHsl(color) {
	const { hue, saturation: rawSaturation, lightness: rawLightness, alpha = 1 } = rgbToHsbl(color, 'l');

	const saturation = roundNumberToDecimalPlaces(rawSaturation * 100, 2);
	const lightness = roundNumberToDecimalPlaces(rawLightness * 100, 2);

	return { hue, saturation, lightness, alpha };
}

export function hexToRgb(color) {
	if (color.length === 4) {
		const repeatHex = (hex1, hex2) => color.slice(hex1, hex2).repeat(2);
		const red = parseInt(repeatHex(1, 2), 16);
		const green = parseInt(repeatHex(2, 3), 16);
		const blue = parseInt(repeatHex(3, 4), 16);

		return { red, green, blue };
	}

	const red = parseInt(color.slice(1, 3), 16);
	const green = parseInt(color.slice(3, 5), 16);
	const blue = parseInt(color.slice(5, 7), 16);

	return { red, green, blue };
}

function getColorType(color) {
	if (color.includes('#')) {
		return 'hex';
	} else if (color.includes('rgb')) {
		return 'rgb';
	} else if (color.includes('rgba')) {
		return 'rgba';
	} else if (color.includes('hsl')) {
		return 'hsl';
	} else if (color.includes('hsla')) {
		return 'hsla';
	} else {
		if (process.env.NODE_ENV === 'development') {
			/* eslint-disable-next-line no-console */
			console.warn('Accepted colors formats are: hex, rgb, rgba, hsl and hsla');
		}
		return 'default';
	}
}

function rgbToObject(color) {
	const colorMatch = color.match(/\(([^)]+)\)/);

	if (!colorMatch) {
		return { red: 0, green: 0, blue: 0, alpha: 0 };
	}

	const [red, green, blue, alpha] = colorMatch[1].split(',');
	const objColor = {
		red: parseInt(red, 10),
		green: parseInt(green, 10),
		blue: parseInt(blue, 10),
		alpha: parseInt(alpha, 10) || 1,
	};
	return objColor;
}

function hexToHsla(color) {
	return rgbToHsl(hexToRgb(color));
}

function rbgStringToHsla(color) {
	return rgbToHsl(rgbToObject(color));
}

function hslToObject(color) {
	const colorMatch = color.match(/\(([^)]+)\)/);

	if (!colorMatch) {
		return { hue: 0, saturation: 0, lightness: 0, alpha: 0 };
	}

	const [hue, saturation, lightness, alpha] = colorMatch[1].split(',');
	const objColor = {
		hue: roundNumberToDecimalPlaces(parseFloat(hue), 2),
		saturation: roundNumberToDecimalPlaces(parseFloat(saturation), 2),
		lightness: roundNumberToDecimalPlaces(parseFloat(lightness), 2),
		alpha: roundNumberToDecimalPlaces(parseFloat(alpha), 2) || 1,
	};
	return objColor;
}

export function colorToHsla(color) {
	const type = getColorType(color);
	switch (type) {
		case 'hex':
			return hexToHsla(color);
		case 'rgb':
		case 'rgba':
			return rbgStringToHsla(color);
		case 'hsl':
		case 'hsla':
			return hslToObject(color);
		case 'default':
		default:
			throw new Error('Accepted color formats are: hex, rgb, rgba, hsl and hsla');
	}
}
