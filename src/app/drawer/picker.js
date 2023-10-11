'use client';

import { ColorPicker, Card, InlineStack, BlockStack, Text } from '@shopify/polaris';
import { useState, useEffect, useCallback } from 'react';

import { rgbToHsbl, hsbToRgb, parseColor, getFromStorage, writeToStorage } from './utils.js';

import styles from './picker.module.css';

export function Picker({ name, val = {} }) {
	const [color, setColor] = useState(val);

	const on_color_change = useCallback(
		(color) => {
			const color_rgb = hsbToRgb(color);
			document.body.style.setProperty(
				name,
				`rgba(${color_rgb.red}, ${color_rgb.green}, ${color_rgb.blue}, ${color_rgb.alpha})`
			);
			const db = getFromStorage();
			db[name] = color;
			writeToStorage(db);
			setColor(color);
		},
		[name]
	);

	useEffect(() => on_color_change(val), [val, on_color_change]);

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
