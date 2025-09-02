import type { NetlifyPluginOptions } from '@netlify/build';

export const onPreBuild = function ({ utils }: NetlifyPluginOptions) {
	console.log('Hello world from onPreBuild event!');
	utils.status.show({
		title: 'Hi from test plugin',
		summary: 'All is well',
		text: 'Really well',
	});
};
