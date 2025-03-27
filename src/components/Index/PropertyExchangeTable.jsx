import React, { useState, useEffect } from "react";
import axios from "axios";

const PropertyExchangeTable = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeSubTab, setActiveSubTab] = useState(0);
    const [pricetableData, setPriceTableData] = useState([]);
    const [rentXtableData, setRentXTableData] = useState([]);

    useEffect(() => {
        const marketPriceData = async () => {
            try {
                const response = await axios.post("https://api.propex.ai/web/qa/api/Propex/GetPropExBuyToLet", {});
                let responseData = response.data;
                console.log(responseData.Data?.details)
                
                if (responseData?.Status === "success") {
                    setPriceTableData(responseData?.Data?.details || []);
                }
            } catch (error) {
                console.error("API Error:", error);
            }
        };

        marketPriceData();

        const rentXData = async () => {
            try {
                const response = await axios.post("https://api.propex.ai/web/live/api/Property/GetTrendingList_v2", {});
                let responseData = response.data;
                console.log(responseData.Data?.micromarketdetails)
                
                if (responseData?.Status === "success") {
                    setRentXTableData(responseData?.Data?.micromarketdetails || []);
                }
            } catch (error) {
                console.error("API Error:", error);
            }
        };
        rentXData();
    }, []);

    const tabs = [
        {
            title: "Market price",
            subTabs: ["Price", "Returns"],
            content: [
                {
                    headers: ["Project Name", "NPS", "Cluster", "Area(Sq.ft)", "Launch Rate(Sq.ft)", "CMP Rate(Sq.ft)", "Launch Price", "Market Price", "RYA Type"],
                    // rows: [
                    //     ["RR Signature", "3.2", "Hebbal", "1300", "4000", "5500", "34,00,000", "46,75,000", "Existing Resi"],
                    //     ["RR Signature", "3.2", "Hebbal", "1300", "4000", "5500", "34,00,000", "46,75,000", "Existing Resi"]
                    // ]
                },
                {
                    headers: ["Project Name", "Rent (₹)", "EMI (₹)", "Yield to cost", "ROI", "IRR", "RYA Type"],
                    // rows: [
                    //     ["RR Signature", "25,653", "28,837", "9%", "6%", "15%", "Existing Resi"],
                    //     ["RR Signature", "25,653", "28,837", "9%", "6%", "15%", "Existing Resi"]
                    // ]
                }
            ]
        },
        {
            title: "RentX",
            subTabs: [],
            content: {
                headers: ["Location", "Prime(₹) 2 Sharing", "Lite(₹) 2 Sharing"],
                rows: [
                    ["Koramangala", "9000", "6789"],
                    ["Koramangala", "9000", "6789"]
                ]
            }
        }
    ];
    const getFilteredData = () => {
        //if (tableData.length === 0) return [];

        if (activeTab === 0) {
            if(activeSubTab === 0){
                return pricetableData.map((item,index) => [
                
                    item.LocationName, item.NPS, item.Cluster, item.Area, item.LaunchRateSqft,
                    item.CMPSqft, item.LaunchPrice, item.MarketPrice, item.RYAType
                ]);
            }else{
                return pricetableData.map((item,index) => [
                
                    item.LocationName, item.Rent, item.EMI, item.YieldtoCostPercentage, item.ROIPercentage,
                    item.IRRPercentage, item.RYAType
                ]);
            }
        } else {
            return rentXtableData.map(item => [
                item.MicroMarket, item.AvgPrimePrice, item.AvgLitePrice
            ]);
        }
    };
    return (
        <div className="pb-14">
            <div className="body-container">
                <div className="title text-center py-8">
                    <h2 className="text-3xl font-bold">
                        <span className="text-[#ef1284]">India’s First</span> Property Exchange
                    </h2>

                    {/* Parent Tabs */}
                    <div className="flex justify-center my-6 w-[300px] m-auto border-[#A4A4A4] rounded-[6px]">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveTab(index);
                                    setActiveSubTab(0); // Reset sub-tab when switching main tab
                                }}
                                className={`px-6 py-3 ${activeTab === index ? "border border-[#EF1284] bg-[#FFE9F4]" : "border border-[#A4A4A4] bg-[#FFFFFF]"}`}
                            >
                                {tab.title}
                            </button>
                        ))}
                    </div>

                    {/* Sub Tabs */}
                    {tabs[activeTab].subTabs.length > 0 && (
                        <div className="flex border border-[#CCCCCC] rounded-t-[12px] border-b-0 w-[250px] h-[52px] bg-white justify-around">
                            {tabs[activeTab].subTabs.map((subTab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveSubTab(index)}
                                    className={`w-[100px] text-lg ${activeSubTab === index ? "border-b-3 border-[#EF1284] text-[#EF1284]" : "text-[#1B1B1B]"}`}
                                >
                                    {subTab}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Table Content */}
                    <div className="border border-[#CCCCCC] bg-white h-[605px] overflow-y-scroll">
                        <table className="w-full border-collapse">
                            <thead class="sticky top-0">
                                <tr className="bg-gray-200">
                                    {Array.isArray(tabs[activeTab].content)
                                        ? tabs[activeTab].content[activeSubTab].headers.map((header, index) => (
                                            <th key={index} className="border-b border-[#CCCCCC] p-4 text-base text-[#1B1B1B]">
                                                {header}
                                            </th>
                                        ))
                                        : tabs[activeTab].content.headers.map((header, index) => (
                                            <th key={index} className="border-b border-[#CCCCCC] p-4 text-base text-[#1B1B1B]">
                                                {header}
                                            </th>
                                        ))
                                    }
                                </tr>
                            </thead>
                            <tbody>
                            {getFilteredData().map((row, rowIndex) => (
                                    <tr key={rowIndex} className="hover:bg-gray-50">
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} className="border-b border-[#CCCCCC] p-4 text-[15px] text-[#1B1B1B]">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PropertyExchangeTable;
