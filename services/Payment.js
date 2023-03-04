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

export async function getPaymentGateAway() {
    const URL = 'players/payment'
    
    const responses = await client.post(`${ROOT_API}/${API_VERSI}/${URL}`)
    const axiosResponses = responses.data.paymentFee;
    
    return axiosResponses
}
export async function cekout(data) {
    const URL = 'players/checkOut'
    
    const responses = await client.post(`${ROOT_API}/${API_VERSI}/${URL}`,data)
    const axiosResponses = responses.data;
    
    return axiosResponses.data
}
export async function getDetailPayment(reference) {
    const URL = `players/${reference}/transaction`;

    const responses = await client.get(`${ROOT_API}/${API_VERSI}/${URL}`);

    const axiosResponses = responses.data;
    const data = axiosResponses.data;
    return data;
}