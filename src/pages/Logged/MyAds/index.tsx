import React from 'react'
import Tabs, { Tab } from '../../../components/Tabs'
import { Title } from './styles'
import TabDonorAnimals from './TabAnimals'
import TabDonorItem from './TabItem'
import TabDonorItemHelp from './TabHelp'

const MyAds = () => {
    return (
        <>
            <Title>MEUS ANUNCIOS</Title>
            <Tabs>
                <Tab label="Animais para doação">
                    <TabDonorAnimals />
                </Tab>
                <Tab label="Itens para doação">
                    <TabDonorItem />
                </Tab>
                <Tab label="Solicitações de ajuda">
                    <TabDonorItemHelp />
                </Tab>
            </Tabs>
        </>
    )
}

export default MyAds