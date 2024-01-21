import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react'
import HeroWithBg from '../../components/card/heroWithBg'
import AllJobs from './allJobs'
import axios from 'axios'

const Jobs = () => {
    return (
        <>
            <Box pt={5} m={"0px"}>
                <HeroWithBg />
               <AllJobs  displayAll={true}/>
            </Box>
        </>
    )
}

export default Jobs

