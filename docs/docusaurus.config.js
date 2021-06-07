/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	title: 'Rumble Studio',
	tagline: 'Manage audio fast',
	url: 'https://redeltaz.github.io',
	baseUrl: '/rumblestudio/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: 'Redeltaz', // Usually your GitHub org/user name.
	projectName: 'rumblestudio', // Usually your repo name.
  onBrokenLinks: 'ignore',
	themeConfig: {
		navbar: {
			title: 'Rumble Studio',
			logo: {
				alt: 'My Site Logo',
				src: 'img/rumblestudio.png',
			},
			items: [
				{
					position: 'left',
					label: 'Documentation',
					items: [
						{
							label: 'Get started',
							href: 'docs/intro',
						},
						{
							label: 'Player Service',
							href: 'docs/player-service/README',
						},
            {
              label: 'Player Configs',
              href: 'docs/player-configs/README'
            }
					],
				},
				{
					href: 'https://github.com/Rumble-Studio/rumblestudio',
					label: 'GitHub',
					position: 'left',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Linkedin',
							href: 'https://www.linkedin.com/company/rumblestudio/',
						},
						{
							label: 'Facebook',
							href: 'https://www.facebook.com/rumblestudio/',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/Rumble-Studio/rumblestudio',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/edit/master/website/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
