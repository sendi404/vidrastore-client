import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_ROOT_API;
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

export async function getNick(data) {
    const URL = "players/cekID";
    const responses = await client.post(`${ROOT_API}/${API_VERSI}/${URL}`, data);

    if (responses.status == 201) {
        const res = {
            error: true,
            message: "Username Tidak Ditemukan",
            data: "Username Tidak Ditemukan",
        };
        return res;
    }
    const res = {
        error: false,
        message: "Username Ditemukan",
        data: responses.data.nickGame,
    };

    return res;
}
export async function getDetailVoucher(query) {
    const URL = `players/${query.replaceAll("-", " ")}/detail`;

    const responses = await client.get(`${ROOT_API}/${API_VERSI}/${URL}`);

    const axiosResponses = responses.data;
    const data = axiosResponses.data;
    return data;
}
