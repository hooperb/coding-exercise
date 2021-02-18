import React from "react";
// Navigation pane sourced from React docs, https://material-ui.com/components/tabs/
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={2}>
					<Typography component={'span'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

export function a11yProps(index) {
	return {
		id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`,
	};
}
