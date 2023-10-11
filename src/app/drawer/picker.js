import { ColorPicker, Card, InlineStack, BlockStack, Text } from '@shopify/polaris';
import { useState, useEffect } from 'react';
import { rgbToHsbl, hsbToRgb, parseColor } from './utils.js';

import styles from './picker.module.css';

export function Picker({ name }) {
	useEffect(() => {
		const colorVal = parseColor(getComputedStyle(document.body).getPropertyValue(name));
		setColor(rgbToHsbl({ red: colorVal[0], green: colorVal[1], blue: colorVal[2], alpha: colorVal[3] }));
	}, [name]);

	const [color, setColor] = useState({
		hue: 255,
		brightness: 1,
		saturation: 1,
	});

	const on_color_change = (color) => {
		const colorVal = hsbToRgb(color);
		document.body.style.setProperty(
			name,
			`rgba(${colorVal.red}, ${colorVal.green}, ${colorVal.blue}, ${colorVal.alpha})`
		);
		setColor(color);
	};

	return (
		<Card>
			<BlockStack gap="200">
				<InlineStack gap="200">
					<span className={styles.code}>{name}</span>
					<div className={styles.swatch} style={{ background: `var(${name})` }} />
				</InlineStack>
				<ColorPicker onChange={on_color_change} color={color} allowAlpha />
			</BlockStack>
		</Card>
	);
}
