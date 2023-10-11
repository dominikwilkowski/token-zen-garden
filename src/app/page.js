'use client';

import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, LegacyCard, Button } from '@shopify/polaris';
import { Drawer } from './drawer';

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
