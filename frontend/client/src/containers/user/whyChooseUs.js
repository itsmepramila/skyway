import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroWithBg from "../../components/card/heroWithBg"
import GridTextList from "../../components/card/gridTextList"
import { Box } from "@chakra-ui/react"

const WhyUs = () => {

    const [data, setData] = useState({});
    const [data1, setData1] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    const [data4, setData4] = useState({});
    const [data5, setData5] = useState({});
    const [data6, setData6] = useState({});
    const [data7, setData7] = useState({});
    const [data8, setData8] = useState({});
    const [data9, setData9] = useState({});
    
    const AboutData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/navigations/');
            // Filter the response data by status and page_type
            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Our Strengths");
                setData(DocumentData); // Assuming you want to slice the filtered data
            }
            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Why Choose");
                setData1(DocumentData); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Diverse sectors");
                setData2(DocumentData); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Training facility");
                setData3(DocumentData); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Dedicated database");
                setData4(DocumentData); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Connect talents");
                setData5(DocumentData); // Assuming you want to slice the filtered data
            }

            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Skill test programs");
                setData6(DocumentData); // Assuming you want to slice the filtered data
            }
            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Excellent management");
                setData7(DocumentData); // Assuming you want to slice the filtered data
            }
            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Ethical Recruitment");
                setData8(DocumentData); // Assuming you want to slice the filtered data
            }
            if (response.data) {
                const DocumentData = response.data.find(
                    (item) => item.status === "Publish" && item.page_type === "Respect human rights");
                setData9(DocumentData); // Assuming you want to slice the filtered data
            }
        
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // Axios GET request to fetch data
        AboutData();
    }, []);
    

   
    const whyChooseUsData = {
        heroImage: "1.jpeg",
        imageTitle: "Our Strengths",
        textTitle: "Why Choose Skyway Management",
        tagline: "A leading foreign employment recruiting agency from Nepal",
        paragraph: "Sky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent Talents who have worked in the sectors for decades. We always value ethics and professionalism at the top. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment.",
        featureTitle1: "Diverse sectors",
        featureText1: "We excel in an array of fields like Hospitality, Facility Management, Security Services, Oil and Gas, Aviation and more.",
        featureTitle2: "Training facility",
        featureText2: "We have a good nexus of training institutes and Vocational Training centers to source the skilled manpower.",
        featureTitle3: "Dedicated database",
        featureText3: "We have our own clear data base pool from where we source the competent and qualified aspirants to address the manpower needed in one. ",
        featureTitle4: "Connect talents",
        featureText4: "We respect the job seekers, help them to enhance their skill and recommend the right job based on their cognitive power believing.",
        featureTitle5: "Skill test program",
        featureText5: "Our standard Skill test program to understands the competency level of job seekers looking for jobs abroad and accordingly place them in fair recruitment based on merits.",
        featureTitle6: "Excellent management",
        featureText6: "Sky-Way Leaves no Stones unturned to serve its’ value client by all measures of multiple dimensions based on the new principle of Human Resources Management.",
        featureTitle7: "Ethical Recruitment",
        featureText7: "We believe in Ethical Recruitment; Equal and Free Recruitment opportunity for the Nepalese Workers.",
        featureTitle8: "Respect human rights",
        featureText8: "We respect the ILO and Human Right Mandate while recruiting the Manpower and always put it on the Top priority.",
    }

    return (
        <>
            <Box>
                <Box>
                    <HeroWithBg data={data} />
                </Box>
                <Box>
                    <GridTextList data1={data1} data2={data2} data3={data3} data4={data4} data5={data5} data6={data6} data7={data7} data8={data8} data9={data9} />
                </Box>
            </Box>
        </>
    )
}

export default WhyUs