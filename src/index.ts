export default {
	async fetch(request): Promise<Response> {
		const destinationURL = "https://www.naver.com";
		const statusCode = 302;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;
