import { AVAILABLE_METRICS, AVAILABLE_SEGMENTS } from "../constants/url";

export const getAvailableMetrics = async () => {
    const response = await fetch(AVAILABLE_METRICS);
    const data = await response.json();
    console.log({ data });
    return data?.data;
};

export const getAvailableSegments = async () => {
    const response = await fetch(AVAILABLE_SEGMENTS);
    const data = await response.json();
    console.log({ data });
    return data?.data;
};
