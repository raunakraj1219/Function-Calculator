// import React from "react";

import React, { useState } from "react";

type Props = {
    metricOptions: any;
    segmentOptions: any;
};

const GridAdd: React.FC<Props> = ({ metricOptions, segmentOptions }) => {
    const [selectedMetric, setSelectedMetric] = useState(metricOptions[0]);
    const [selectedSegment, setSelectedSegment] = useState(segmentOptions[0]);
    const [selectedSegmentType, setSelectedSegmentType] = useState();
    const handleMetricChange = (e: any) => {
        const value = e.target.value;
        const selectedOption = metricOptions?.find(
            (opt: any) => opt.id === value
        );
        setSelectedMetric(selectedOption);
    };
    const handleSegmentChange = (e: any) => {
        const value = e.target.value;
        const selectedOption = segmentOptions?.find(
            (opt: any) => opt.segmentKey === value
        );
        setSelectedSegment(selectedOption);
        console.log({ value }, { selectedOption });
    };

    const handleSegmentTypeChange = (e: any) => {
        const value = e.target.value;
        const selectedOption = selectedSegment?.find(
            (opt: any) => opt.segmentId === value
        );
        setSelectedSegmentType(selectedOption);
    };

    const handleButtonClick = (type = "add") => {};

    console.log(selectedMetric);
    return (
        <div>
            <select onChange={handleMetricChange} value={selectedMetric}>
                {metricOptions?.map((metric: any) => (
                    <option value={metric?.id}>{metric.displayName}</option>
                ))}
            </select>
            <br />
            <select onChange={handleSegmentChange} value={selectedSegment}>
                {segmentOptions?.map((metric: any) => (
                    <option value={metric?.segmentKey}>
                        {metric.displayName}
                    </option>
                ))}
            </select>
            <br />
            <select
                onChange={handleSegmentTypeChange}
                value={selectedSegmentType}
            >
                {selectedSegment?.values?.map((metric: any) => (
                    <option value={metric?.segmentId}>
                        {metric.displayName}
                    </option>
                ))}
            </select>
            <div>
                <button onClick={() => handleButtonClick("cancel")}>
                    Cancel
                </button>
                <button onClick={() => handleButtonClick("add")}>Add</button>
            </div>
        </div>
    );
};

export default GridAdd;
