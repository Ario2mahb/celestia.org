exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect } = actions;

	createRedirect({
		fromPath: `/deploy`,
		toPath: `/build#deploy`,
		isPermanent:false,
	});

	createRedirect({
		fromPath: `/developer-portal`,
		toPath: `/build`,
		isPermanent: true,
	});
};
