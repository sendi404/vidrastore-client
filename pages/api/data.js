// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const AUTHORIZATION = "wjMc4dnW0LIayNPFCTASDX3kdRYw0zil"
const URLAPI = "https://blog.kawestore.com";
const APIVERSION = "api/v1";
const DESIGNURL = "players/design";
const LANDINGPAGEURL = "players/landingPage";

export async function DesignPage() {
  const resDesign = await fetch(`${URLAPI}/${APIVERSION}/${DESIGNURL}`, {
    headers: {
      Authorization: `Bearer ${AUTHORIZATION}`,
    },
  });
  const DesignItem = await resDesign.json();
  return DesignItem
}

export async function LandingPges() {
  const resLandingPage = await fetch(`${URLAPI}/${APIVERSION}/${LANDINGPAGEURL}`, {
    headers: {
      Authorization: `Bearer ${AUTHORIZATION}`,
    },
  });
  const LandigPageItem = await resLandingPage.json();
  return LandigPageItem
}
