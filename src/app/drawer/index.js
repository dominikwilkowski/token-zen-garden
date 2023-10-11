import { Text, BlockStack } from '@shopify/polaris';
import { Picker } from './picker';

import styles from './drawer.module.css';

export function Drawer() {
	return (
		<aside className={styles.drawer}>
			<BlockStack gap="500">
				<Text variant="headingLg" as="h2">
					Polaris Tokens Zen Garden
				</Text>
				<Picker name="--p-color-bg-surface" />
				<Picker name="--p-color-bg-fill-critical" />
			</BlockStack>
		</aside>
	);
}
