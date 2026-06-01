export default {
	async fetch(request): Promise<Response> {
		const destinationURL = "https://mcard.barunsoncard.com/m/gmtzkh830291";
		const message =
			"승원: 되도록이면 축의는 현금보다는 계좌이체가 좋습니다! 축의대에서는 모바일 청첩장만 보여주셔도 되어요!";

		const html = `<!DOCTYPE html>
<html lang="ko">
<head><meta charset="utf-8"></head>
<body>
<script>
  alert(${JSON.stringify(message)});
  window.location.replace(${JSON.stringify(destinationURL)});
</script>
</body>
</html>`;

		return new Response(html, {
			headers: { "content-type": "text/html; charset=utf-8" },
		});
	},
} satisfies ExportedHandler;
