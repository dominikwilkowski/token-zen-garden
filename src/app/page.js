'use client';
import { useState, useRef, useCallback } from 'react';
import {
	AppProvider,
	ActionList,
	Box,
	Card,
	Divider,
	InlineGrid,
	BlockStack,
	Badge,
	Page,
	LegacyCard,
	Button,
	TextField,
	Text,
	Frame,
	Navigation,
	TopBar,
	ContextualSaveBar,
	Toast,
	useBreakpoints,
	ChoiceList,
	ButtonGroup,
	MediaCard,
	VideoThumbnail,
	Banner,
	KeyboardKey,
} from '@shopify/polaris';
import { HomeMinor, OrdersMinor, ProductsMinor, AppsMinor, GlobeMinor, DiscountsMinor } from '@shopify/polaris-icons';
import enTranslations from '@shopify/polaris/locales/en.json';

import { Drawer } from './drawer';

import '@shopify/polaris/build/esm/styles.css';

import './global.css';
import { IndexTable } from './components/IndexTable';

export default function Home() {
	const logo = {
		width: 124,
		topBarSource:
			'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-inverted-primary-logo-bdc6ddd67862d9bb1f8c559e1bb50dd233112ac57b29cac2edcf17ed2e1fe6fa.svg',
		contextualSaveBarSource:
			'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-inverted-primary-logo-bdc6ddd67862d9bb1f8c559e1bb50dd233112ac57b29cac2edcf17ed2e1fe6fa.svg',
		url: '#',
		accessibilityLabel: 'Shopify Token Zen Garden',
	};
	const defaultState = useRef({
		emailFieldValue: 'tokens@zen-garden.com',
		nameFieldValue: 'The Tokens Zen Garden',
	});
	const [storeName, setStoreName] = useState(defaultState.current.nameFieldValue);
	const userMenuActions = [
		{
			items: [{ content: 'Community forums' }],
		},
	];
	const [selected, setSelected] = useState(['hidden']);

	const handleChange = useCallback((value) => setSelected(value), []);

	const [searchActive, setSearchActive] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [userMenuActive, setUserMenuActive] = useState(false);
	const handleSearchResultsDismiss = useCallback(() => {
		setSearchActive(false);
		setSearchValue('');
	}, []);
	const handleSearchFieldChange = useCallback((value) => {
		setSearchValue(value);
		setSearchActive(value.length > 0);
	}, []);
	const toggleUserMenuActive = useCallback(() => setUserMenuActive((userMenuActive) => !userMenuActive), []);
	const toggleMobileNavigationActive = useCallback(
		() => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive),
		[]
	);
	const { smUp } = useBreakpoints();

	const searchResultsMarkup = (
		<ActionList items={[{ content: 'Shopify help center' }, { content: 'Community forums' }]} />
	);

	const searchFieldMarkup = (
		<TopBar.SearchField onChange={handleSearchFieldChange} value={searchValue} placeholder="Search" />
	);

	const userMenuMarkup = (
		<TopBar.UserMenu
			actions={userMenuActions}
			name="Tokens"
			detail={storeName}
			initials="D"
			open={userMenuActive}
			onToggle={toggleUserMenuActive}
		/>
	);
	return (
		<main>
			<AppProvider i18n={enTranslations}>
				<Frame
					logo={logo}
					topBar={
						<TopBar
							showNavigationToggle
							userMenu={userMenuMarkup}
							searchResultsVisible={searchActive}
							searchField={searchFieldMarkup}
							searchResults={searchResultsMarkup}
							onSearchResultsDismiss={handleSearchResultsDismiss}
							onNavigationToggle={toggleMobileNavigationActive}
						/>
					}
					navigation={
						<Navigation location="/">
							<Navigation.Section
								items={[
									{
										url: '#',
										label: 'Home',
										icon: HomeMinor,
									},
									{
										url: '#',
										excludePaths: ['#'],
										label: 'Orders',
										icon: OrdersMinor,
										badge: '15',
									},
									{
										url: '#',
										excludePaths: ['#'],
										label: 'Products',
										icon: ProductsMinor,
									},
									{
										url: '#',
										excludePaths: ['#'],
										label: 'Tokens',
										icon: AppsMinor,
									},
									{
										url: '#',
										excludePaths: ['#'],
										label: 'Garden',
										icon: GlobeMinor,
									},
									{
										url: '#',
										excludePaths: ['#'],
										label: 'Zen',
										icon: DiscountsMinor,
									},
								]}
							/>
						</Navigation>
					}
				>
					<Page
						backAction={{ content: 'Products', url: '#' }}
						title="Polaris token zen garden"
						titleMetadata={<Badge tone="success">Oooh</Badge>}
						subtitle="Water some tokens"
						compactTitle
						primaryAction={{ content: 'Save', disabled: true }}
						secondaryActions={[
							{
								content: 'Duplicate',
								accessibilityLabel: 'Secondary action label',
								onAction: () => alert('Duplicate action'),
							},
							{
								content: 'View on your store',
								onAction: () => alert('View on your store action'),
							},
						]}
					>
						<BlockStack gap={{ xs: '800', sm: '400' }}>
							<Banner title="The tokens archive" onDismiss={() => {}}>
								<p>
									This is not how you should build for the admin. Non of the patterns below are{' '}
									<KeyboardKey>good</KeyboardKey>!
								</p>
							</Banner>
							<Card>
								<InlineGrid columns={{ xs: '1fr', md: '2fr 5fr' }} gap="400">
									<Box as="section" paddingInlineStart={{ xs: 400, sm: 0 }} paddingInlineEnd={{ xs: 400, sm: 0 }}>
										<BlockStack gap="400">
											<Text as="h3" variant="headingMd">
												InterJambs
											</Text>
											<Text as="p" variant="bodyMd">
												Interjambs are the rounded protruding bits of your puzzlie piece
											</Text>
										</BlockStack>
									</Box>
									<BlockStack gap="400">
										<TextField label="Interjamb style" />
										<TextField label="Interjamb ratio" />
									</BlockStack>
								</InlineGrid>
							</Card>
							{smUp ? <Divider /> : null}
							<MediaCard
								title="Turn your side-project into a business"
								primaryAction={{
									content: 'Learn more',
									onAction: () => {},
								}}
								description={`In this course, you’ll learn how the Kular family turned their mom’s recipe book into a global business.`}
								popoverActions={[{ content: 'Dismiss', onAction: () => {} }]}
							>
								<VideoThumbnail
									videoLength={80}
									thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
									onClick={() => console.log('clicked')}
								/>
							</MediaCard>
							<IndexTable />
							<Card>
								<BlockStack gap="400">
									<Text as="h3" variant="headingMd">
										Choose your icecream
									</Text>
									<InlineGrid columns={{ xs: '1fr', md: '1fr 1fr' }} gap="400">
										<BlockStack gap="400">
											<ChoiceList
												choices={[
													{ label: 'Cone', value: 'cone' },
													{ label: 'Cup', value: 'cup' },
												]}
												selected={selected}
												onChange={handleChange}
											/>
										</BlockStack>
										<BlockStack gap="400">
											<ChoiceList
												allowMultiple
												choices={[
													{ label: 'Vanilla', value: 'vanilla' },
													{ label: 'Chocolate', value: 'chocolate' },
													{ label: 'Strawberry', value: 'strawberry' },
												]}
												selected={selected}
												onChange={handleChange}
											/>
										</BlockStack>
									</InlineGrid>
									<ButtonGroup>
										<Button variant="primary">Yumm Ice-cream</Button>
										<Button variant="primary" tone="critical">
											I don&apos;t like Ice-cream
										</Button>
										<Button variant="plain">This whole page is bad UX</Button>
									</ButtonGroup>
								</BlockStack>
							</Card>
						</BlockStack>
					</Page>
				</Frame>
				<Drawer />
			</AppProvider>
		</main>
	);
}
