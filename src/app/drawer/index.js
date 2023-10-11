'use client';

import { Text, BlockStack, InlineStack, Button, DropZone, TextField } from '@shopify/polaris';
import { useState, useEffect, useCallback } from 'react';

import { rgbToHsbl, hsbToRgb, parseColor, getFromStorage, writeToStorage } from './utils.js';
import { Picker } from './picker';

import styles from './drawer.module.css';

const TOKEN = [
	'--p-color-video-thumbnail-play-button-text-on-bg-fill',
	'--p-color-video-thumbnail-play-button-bg-fill',
	'--p-color-video-thumbnail-play-button-bg-fill-hover',
	'--p-color-radio-button-icon-disabled',
	'--p-color-radio-button-bg-surface-disabled',
	'--p-color-nav-bg-surface-selected',
	'--p-color-nav-bg-surface-active',
	'--p-color-nav-bg-surface-hover',
	'--p-color-nav-bg-surface',
	'--p-color-nav-bg',
	'--p-color-input-border-active',
	'--p-color-input-border-hover',
	'--p-color-input-border',
	'--p-color-input-bg-surface-active',
	'--p-color-input-bg-surface-hover',
	'--p-color-input-bg-surface',
	'--p-color-checkbox-icon-disabled',
	'--p-color-checkbox-bg-surface-disabled',
	'--p-color-backdrop-bg',
	'--p-color-avatar-two-text-on-bg-fill',
	'--p-color-avatar-two-bg-fill',
	'--p-color-avatar-three-text-on-bg-fill',
	'--p-color-avatar-three-bg-fill',
	'--p-color-avatar-text-on-bg-fill',
	'--p-color-avatar-one-text-on-bg-fill',
	'--p-color-avatar-one-bg-fill',
	'--p-color-avatar-four-text-on-bg-fill',
	'--p-color-avatar-four-bg-fill',
	'--p-color-avatar-five-text-on-bg-fill',
	'--p-color-avatar-five-bg-fill',
	'--p-color-avatar-bg-fill',
	'--p-color-icon-inverse',
	'--p-color-icon-magic',
	'--p-color-icon-emphasis-active',
	'--p-color-icon-emphasis-hover',
	'--p-color-icon-emphasis',
	'--p-color-icon-critical',
	'--p-color-icon-warning',
	'--p-color-icon-caution',
	'--p-color-icon-success',
	'--p-color-icon-info',
	'--p-color-icon-brand',
	'--p-color-icon-secondary-active',
	'--p-color-icon-secondary-hover',
	'--p-color-icon-secondary',
	'--p-color-icon-disabled',
	'--p-color-icon-active',
	'--p-color-icon-hover',
	'--p-color-icon',
	'--p-color-border-inverse-active',
	'--p-color-border-inverse-hover',
	'--p-color-border-inverse',
	'--p-color-border-magic-secondary',
	'--p-color-border-magic',
	'--p-color-border-emphasis-active',
	'--p-color-border-emphasis-hover',
	'--p-color-border-emphasis',
	'--p-color-border-critical-secondary',
	'--p-color-border-critical',
	'--p-color-border-warning',
	'--p-color-border-caution',
	'--p-color-border-success',
	'--p-color-border-info',
	'--p-color-border-brand',
	'--p-color-border-focus',
	'--p-color-border-tertiary',
	'--p-color-border-secondary',
	'--p-color-border-disabled',
	'--p-color-border-hover',
	'--p-color-border',
	'--p-color-text-link-inverse',
	'--p-color-text-inverse-secondary',
	'--p-color-text-inverse',
	'--p-color-text-magic-on-bg-fill',
	'--p-color-text-magic',
	'--p-color-text-emphasis-on-bg-fill-active',
	'--p-color-text-emphasis-on-bg-fill-hover',
	'--p-color-text-emphasis-on-bg-fill',
	'--p-color-text-emphasis-active',
	'--p-color-text-emphasis-hover',
	'--p-color-text-emphasis',
	'--p-color-text-critical-on-bg-fill',
	'--p-color-text-critical-active',
	'--p-color-text-critical-hover',
	'--p-color-text-critical',
	'--p-color-text-warning-on-bg-fill',
	'--p-color-text-warning-active',
	'--p-color-text-warning-hover',
	'--p-color-text-warning',
	'--p-color-text-caution-on-bg-fill',
	'--p-color-text-caution-active',
	'--p-color-text-caution-hover',
	'--p-color-text-caution',
	'--p-color-text-success-on-bg-fill',
	'--p-color-text-success-active',
	'--p-color-text-success-hover',
	'--p-color-text-success',
	'--p-color-text-info-on-bg-fill',
	'--p-color-text-info-active',
	'--p-color-text-info-hover',
	'--p-color-text-info',
	'--p-color-text-brand-on-bg-fill-disabled',
	'--p-color-text-brand-on-bg-fill-active',
	'--p-color-text-brand-on-bg-fill-hover',
	'--p-color-text-brand-on-bg-fill',
	'--p-color-text-brand-hover',
	'--p-color-text-brand',
	'--p-color-text-link-active',
	'--p-color-text-link-hover',
	'--p-color-text-link',
	'--p-color-text-disabled',
	'--p-color-text-secondary',
	'--p-color-text',
	'--p-color-bg-fill-transparent-secondary-active',
	'--p-color-bg-fill-transparent-secondary-hover',
	'--p-color-bg-fill-transparent-secondary',
	'--p-color-bg-fill-transparent-selected',
	'--p-color-bg-fill-transparent-active',
	'--p-color-bg-fill-transparent-hover',
	'--p-color-bg-fill-transparent',
	'--p-color-bg-fill-inverse-active',
	'--p-color-bg-fill-inverse-hover',
	'--p-color-bg-fill-inverse',
	'--p-color-bg-fill-magic-secondary-active',
	'--p-color-bg-fill-magic-secondary-hover',
	'--p-color-bg-fill-magic-secondary',
	'--p-color-bg-fill-magic',
	'--p-color-bg-fill-emphasis-active',
	'--p-color-bg-fill-emphasis-hover',
	'--p-color-bg-fill-emphasis',
	'--p-color-bg-fill-critical-secondary',
	'--p-color-bg-fill-critical-selected',
	'--p-color-bg-fill-critical-active',
	'--p-color-bg-fill-critical-hover',
	'--p-color-bg-fill-critical',
	'--p-color-bg-fill-caution-secondary',
	'--p-color-bg-fill-caution-active',
	'--p-color-bg-fill-caution-hover',
	'--p-color-bg-fill-caution',
	'--p-color-bg-fill-warning-secondary',
	'--p-color-bg-fill-warning-active',
	'--p-color-bg-fill-warning-hover',
	'--p-color-bg-fill-warning',
	'--p-color-bg-fill-success-secondary',
	'--p-color-bg-fill-success-active',
	'--p-color-bg-fill-success-hover',
	'--p-color-bg-fill-success',
	'--p-color-bg-fill-info-secondary',
	'--p-color-bg-fill-info-active',
	'--p-color-bg-fill-info-hover',
	'--p-color-bg-fill-info',
	'--p-color-bg-fill-brand-disabled',
	'--p-color-bg-fill-brand-selected',
	'--p-color-bg-fill-brand-active',
	'--p-color-bg-fill-brand-hover',
	'--p-color-bg-fill-brand',
	'--p-color-bg-fill-tertiary-active',
	'--p-color-bg-fill-tertiary-hover',
	'--p-color-bg-fill-tertiary',
	'--p-color-bg-fill-secondary-active',
	'--p-color-bg-fill-secondary-hover',
	'--p-color-bg-fill-secondary',
	'--p-color-bg-fill-disabled',
	'--p-color-bg-fill-selected',
	'--p-color-bg-fill-active',
	'--p-color-bg-fill-hover',
	'--p-color-bg-fill',
	'--p-color-bg-surface-transparent',
	'--p-color-bg-surface-inverse',
	'--p-color-bg-surface-magic-active',
	'--p-color-bg-surface-magic-hover',
	'--p-color-bg-surface-magic',
	'--p-color-bg-surface-emphasis-active',
	'--p-color-bg-surface-emphasis-hover',
	'--p-color-bg-surface-emphasis',
	'--p-color-bg-surface-critical-active',
	'--p-color-bg-surface-critical-hover',
	'--p-color-bg-surface-critical',
	'--p-color-bg-surface-warning-active',
	'--p-color-bg-surface-warning-hover',
	'--p-color-bg-surface-warning',
	'--p-color-bg-surface-caution-active',
	'--p-color-bg-surface-caution-hover',
	'--p-color-bg-surface-caution',
	'--p-color-bg-surface-success-active',
	'--p-color-bg-surface-success-hover',
	'--p-color-bg-surface-success',
	'--p-color-bg-surface-info-active',
	'--p-color-bg-surface-info-hover',
	'--p-color-bg-surface-info',
	'--p-color-bg-surface-brand-selected',
	'--p-color-bg-surface-brand-active',
	'--p-color-bg-surface-brand-hover',
	'--p-color-bg-surface-brand',
	'--p-color-bg-surface-tertiary-active',
	'--p-color-bg-surface-tertiary-hover',
	'--p-color-bg-surface-tertiary',
	'--p-color-bg-surface-secondary-selected',
	'--p-color-bg-surface-secondary-active',
	'--p-color-bg-surface-secondary-hover',
	'--p-color-bg-surface-secondary',
	'--p-color-bg-surface-disabled',
	'--p-color-bg-surface-selected',
	'--p-color-bg-surface-hover',
	'--p-color-bg-surface-active',
	'--p-color-bg-surface',
	'--p-color-bg-inverse',
	'--p-color-bg',
];

function get_all_colors() {
	const colors = {};
	TOKEN.forEach((token) => {
		if (typeof getComputedStyle !== 'undefined') {
			const colorVal = parseColor(getComputedStyle(document.body).getPropertyValue(token));
			colors[token] = rgbToHsbl({ red: colorVal[0], green: colorVal[1], blue: colorVal[2], alpha: colorVal[3] });
		}
	});
	writeToStorage(colors);
	return colors;
}

export function Drawer() {
	const [db, setDb] = useState(getFromStorage('token-zen') || get_all_colors());
	const [filter, setFilter] = useState('');

	const reset = () => {
		document.body.removeAttribute('style');
		const colors = get_all_colors();
		writeToStorage(colors);
		setDb(colors);
	};

	useEffect(() => {
		if (
			(typeof db !== 'undefined' && typeof db[TOKEN[0]] !== 'undefined' && Object.keys(db[TOKEN[0]]).length === 0) ||
			Object.keys(db).length === 0
		) {
			reset();
		}
	});

	const import_file = useCallback((_dropFiles, acceptedFiles, _rejectedFiles) => {
		const file = acceptedFiles[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (event) => {
				let data = event.target.result;
				try {
					data = JSON.parse(data);
					// very quick'n'dirty validation
					if (data.export === 'token-zen-export' && !!data.db) {
						writeToStorage(data.db);
						setDb(data.db);
					}
				} catch (error) {
					setError(
						`The import file could not be read. Please make sure it's in the right format "token-zen-export.export"`
					);
				}
			};
			reader.readAsText(file);
		}
	}, []);

	return (
		<aside className={styles.drawer}>
			<BlockStack gap="500">
				<Text variant="headingLg" as="h2">
					Polaris Tokens Zen Garden
				</Text>

				<InlineStack gap="100" blockAlign="center">
					<Button onClick={reset}>Reset</Button>
					<Button
						url={`data:text/plain;charset=utf-8,${encodeURIComponent(
							JSON.stringify({ export: 'token-zen-export', db }, null, '\t')
						)}`}
						download="token-zen-export.export"
					>
						Download
					</Button>
					<DropZone onDrop={import_file} allowMultiple={false}>
						<DropZone.FileUpload />
					</DropZone>
				</InlineStack>

				<TextField
					label="Search tokens"
					type="text"
					value={filter}
					onChange={useCallback((value) => setFilter(value), [])}
					autoComplete="off"
				/>
				{TOKEN.filter((token) => token.includes(filter)).map((token) => (
					<Picker key={token} name={token} val={db[token]} />
				))}
			</BlockStack>
		</aside>
	);
}
