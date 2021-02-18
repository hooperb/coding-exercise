import React from 'react';

//Styles
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Components
import HypertensionCalculator from "../HypertensionCalculator/HypertensionCalculator";
import KidneyDiseaseCalculator from "../KidneyDiseaseCalculator/KidneyDiseaseCalculator";

// Navigation
import {TabPanel, a11yProps} from "../Navigation/Navigation";

const App = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className='app-container'>
			<AppBar position="static">
				<Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
					<Tab label="Hypertension Calculator" data-testid="hypertension-navigation" {...a11yProps(0)} />
					<Tab label="Kidney Disease Calculator" data-testid="kidney-disease-navigation" {...a11yProps(1)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<HypertensionCalculator/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<KidneyDiseaseCalculator/>
			</TabPanel>
		</div>
	);
}

export default App;
