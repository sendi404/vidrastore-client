import axios from 'axios';

const URLAPI = "https://blog.kawestore.com";
const APIVERSION = "api/v1";
const DESIGNURL = "players/design";
const LANDINGPAGEURL = "players/landingPage";

export default async function callAPI({
  url, method, data, headers
}) {
  let headers = {};
  const response = await axios({
    url,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  if (response.status > 300) {
    const res = {
      error: true,
      message: response.data.message,
      data: null,
    };
    return res;
  }

  const { length } = Object.keys(response.data);
  const res = {
    error: false,
    message: 'success',
    data: length > 1 ? response.data : response.data.data,
  };
  return res
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
