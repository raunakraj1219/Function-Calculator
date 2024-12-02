import { useEffect, useState } from "react";
import "./App.css";
import { getAvailableMetrics, getAvailableSegments } from "./utils/api-calls";
import GridAdd from "./components/grid-add";

function App() {
    const [metricsData, setMetricData] = useState([]);
    const [segmentData, setSegmentData] = useState([]);

    const getAndSetData = async () => {
        const tempMetricsData = await getAvailableMetrics();
        setMetricData(tempMetricsData);

        const tempSegmentData = await getAvailableSegments();
        setSegmentData(tempSegmentData);
    };
    useEffect(() => {
        getAndSetData();
    }, []);

    console.log({ metricsData }, { segmentData });

    return (
        <div className="text-blue-500 p-4">
            temp
            <GridAdd metricOptions={metricsData} segmentOptions={segmentData} />
        </div>
    );
}

export default App;
