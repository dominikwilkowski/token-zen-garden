'use client';

import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider, Page, LegacyCard, Button } from '@shopify/polaris';

export default function Home() {
	return (
		<AppProvider i18n={enTranslations}>
			<Page title="Polaris Token Zen Garden">
				<LegacyCard sectioned>
					<Button onClick={() => alert('Button clicked!')}>Example button</Button>
				</LegacyCard>
			</Page>
		</AppProvider>
	);
}
