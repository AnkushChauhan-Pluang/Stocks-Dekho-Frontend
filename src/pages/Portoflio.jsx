import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    ChakraProvider,
} from '@chakra-ui/react'
import { Stack } from '@mui/joy'
import {Avatar} from "@mui/material"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { PieChart } from '../components/Portfolio/pie'
import LineGraph from '../components/Portfolio/LineGraph'
import { Holdings } from './Holdings'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const StatComponent = () => {
    return (
        <div style={{ marginLeft: 10 }}>
            <StatGroup>
                <Stat>
                    <StatLabel>Portfolio</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                    </StatHelpText>
                </Stat>
            </StatGroup>
        </div>
    )
}


export const Portfolio = () => {

    const TabView = () => {
        return (
            <Tabs isFitted variant='enclosed' colorScheme='green'>
                <TabList>
                    <Tab>5D</Tab>
                    <Tab>1M</Tab>
                    <Tab>6M</Tab>
                    <Tab>1Y</Tab>
                    <Tab>2Y</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <HistoryGraph timeFrame={5} />
                    </TabPanel>
                    <TabPanel>
                        <HistoryGraph  timeFrame={30}/>
                    </TabPanel>
                    <TabPanel>
                        <HistoryGraph timeFrame={180}/>
                    </TabPanel>
                    <TabPanel>
                        <HistoryGraph timeFrame={365}/>
                    </TabPanel>
                    <TabPanel>
                        <HistoryGraph timeFrame={730} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        )
    }

    const HistoryGraph = ({timeFrame}) => {
        return (
            <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%', height: '50%' }}>
                <LineGraph symbol={'INFY'} timeFrame={timeFrame} />            
            </div>
        )
    }

    const navigate = useNavigate()
    const backBtn=()=>{
            navigate(-1)
    }
    return (
        <div style={{ margin: 10, padding: 20 }}>

            <Stack direction={'row'} sx={{alignItems: 'center',}} >
            <Avatar sx={{marginRight:1}} ><ArrowBackIcon  onClick={backBtn}/></Avatar>
            <h1>Portfolio</h1>
            </Stack>
            <div style={{ display: 'flex', flexDirection: 'column', width: '80%', backgroundColor: 'lightgreen', color: 'white', fontWeight: 'bold', marginRight: 'auto', marginLeft: 'auto', padding: 10, borderRadius: 20, marginBottom: 20 }}>

                <h1 style={{ fontSize: '29', fontWeight: 'bolder' }}>Deepak Singh</h1>

                <div style={{ display: 'flex', flexDirection: 'row', height: '25%', width: '25%' }}>
                    <ChakraProvider>
                        <StatComponent />
                    </ChakraProvider>

                </div>
            </div>
            <div style={{ marginLeft: 'auto', marginRight: 'auto', maringTop: 20, paddingLeft: 10, paddingRight: 10 }}>
                <ChakraProvider>


                    <TabView />
                    <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' , marginBottom:2 }}>
                        <PieChart />
                    </div>

                
                </ChakraProvider>
                <Typography textAlign={'intial'} sx={{margin:1 ,fontFamily: 'Raleway, Arial',}} variant='h5'>Holdings</Typography>
                <Holdings/>

            </div>
        </div>
    )
}