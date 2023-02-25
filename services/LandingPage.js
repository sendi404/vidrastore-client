import axios from "axios";

const ROOT_API = "https://blog.kawestore.com";
const API_VERSI = "api/v1";
const AUTHORIZATION = "wjMc4dnW0LIayNPFCTASDX3kdRYw0zil"

const client = axios.create({
    headers: {
        Authorization: `Bearer ${AUTHORIZATION}`,
    },
    validateStatus: function (status) {
        return status < 999; // ignore http error
    },
});

export async function DesignPage() {
    const URL = "players/design";

    const responses = await client.get(`${ROOT_API}/${API_VERSI}/${URL}`);

    const axiosResponses = responses.data;
    return axiosResponses[0];
}

export async function LandingPages() {
    const LANDINGPAGEURL = "players/landingPage";
    const resLandingPage = await client.get(`${ROOT_API}/${API_VERSI}/${LANDINGPAGEURL}`, {
      headers: {
        Authorization: `Bearer ${AUTHORIZATION}`,
      },
    });
    const LandigPageItem = await resLandingPage.data;
    return LandigPageItem
  }
  