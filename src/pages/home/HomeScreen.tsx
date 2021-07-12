import React, { useEffect } from 'react'
import styled from "styled-components";
import { NavBar } from '../../components/shared/navbar/NavBar';
import { SideBar } from '../../components/shared/sidebar/SideBar';
import { MainPanel } from '../../components/ui/mainPanel/MainPanel';
import { useQuery } from '@apollo/client';
import { GET_LAUNCHES_PAST } from '../../graphql/queries/LaunchesPast';
import { useState } from 'react';
import { launchesPastQuery, LaunchesPast } from '../../interfaces/LaunchPast';


export const HomeScreen = () => {

    const [launchesPast, setLaunchesPast] = useState<LaunchesPast[]>([])

    const { data, loading, error } = useQuery<launchesPastQuery>( GET_LAUNCHES_PAST )

    useEffect(() => {
        if(!loading && !error) {
            setLaunchesPast(data!.launchesPast)
        }
    }, [loading, data, error])


    return (
        <HomeWrapper>

            <NavBar/>

            <MainWrapper>
                <SideBar
                    launches= {launchesPast}
                
                />
                <MainPanel/>
            </MainWrapper>

        </HomeWrapper>
    )
}

const HomeWrapper = styled.div`
    height: auto;
    padding-bottom: 7%;
    background-color: #2f373e;
    color: #fff;
    padding-left: 25px;
    padding-right: 25px;
`

const MainWrapper = styled.div`

    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    background-color: #ffffffca;
    border: 1px solid #dadde1;
    border-radius: 10px;
    

`