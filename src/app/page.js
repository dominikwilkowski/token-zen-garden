'use client';

import { AppProvider, Page, LegacyCard, Button } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

import { Drawer } from './drawer';

import '@shopify/polaris/build/esm/styles.css';

import './global.css';

export default function Home() {
	return (
		<main>
			<AppProvider i18n={enTranslations}>
				<Page title="Polaris Token Zen Garden">
					<LegacyCard sectioned>
						<Button onClick={() => alert('Button clicked!')}>Example button</Button>
					</LegacyCard>
				</Page>

				<Drawer />
			</AppProvider>
		</main>
	);
}
