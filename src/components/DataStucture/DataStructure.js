import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

class DataStructure extends React.Component {
	component = "";

	constructor(props) {
		super(props);
		this.component = props.definition;
	}

	render(){
		if(this.component === "hypertension"){
			return (
				<div className="data-example-container">
					<Typography className="data-example-title" variant="h6" component="h1">
						Here are some examples of the input data format:
					</Typography>
					<Card className="example">
						<Typography className="example-content" color="textSecondary">
							<span>[</span>
							<span>{String.fromCharCode('123')}SysBP: 91, DiaBP: 71, atDate: '2020/08/09' {String.fromCharCode('125')}</span>
							<span>]</span>
						</Typography>
					</Card>
					<Card className="example">
						<Typography className="example-content" color="textSecondary">
							<span>[</span>
							<span>{String.fromCharCode('123')}SysBP: 120, DiaBP: 90, atDate: '2020/04/05' {String.fromCharCode('125')},</span>
							<span>{String.fromCharCode('123')}SysBP: 120, DiaBP: 90, atDate: '2020/08/01' {String.fromCharCode('125')} </span>
							<span>]</span>
						</Typography>
					</Card>
					<Card className="example">
						<Typography className="example-content" color="textSecondary">
							<span>[</span>
							<span>{String.fromCharCode('123')}SysBP: 41, DiaBP: 23, atDate: '2019/09/09' {String.fromCharCode('125')},</span>
							<span>{String.fromCharCode('123')}SysBP: 85, DiaBP: 57, atDate: '2020/12/25' {String.fromCharCode('125')},</span>
							<span>{String.fromCharCode('123')}SysBP: 70, DiaBP: 18, atDate: '2020/02/14' {String.fromCharCode('125')} </span>
							<span>]</span>
						</Typography>
					</Card>

					<Typography className="data-example-title" variant="h6" component="h1">
						Addition input information:
					</Typography>
					<Card className="example">
						<Typography className="example-content" color="textSecondary">
							<span>Date format must be in the form 'YYYY/DD/MM'</span>
							<span>SysBP and DiaBP values must both be integers</span>
						</Typography>
					</Card>
				</div>
			)
		}

		if(this.component === "kidneydisease"){
			return (
				<div className="data-example-container">
					<Typography className="data-example-title" variant="h6" component="h1">
						Here are some examples of the input data format:
					</Typography>
					<Card className="example">
						<Typography className="example-content" color="textSecondary">
							<span>[</span>
							<span>{String.fromCharCode('123')}eGFR: 91, atDate: '2020/11/08' {String.fromCharCode('125')}</span>
							<span>]</span>
						</Typography>
					</Card>
					<Card className="example">
						<Typography className="example-content" color="textSecondary">
							<span>[</span>
							<span>{String.fromCharCode('123')}eGFR: 14.1, atDate: '2021/01/01' {String.fromCharCode('125')},</span>
							<span>{String.fromCharCode('123')}eGFR: 85, atDate: '2019/05/23' {String.fromCharCode('125')} </span>
							<span>]</span>
						</Typography>
					</Card>
					<Card className="example">
						<Typography className="example-content" color="textSecondary">
							<span>[</span>
							<span>{String.fromCharCode('123')}eGFR: 82.3, atDate: '1997/10/05' {String.fromCharCode('125')},</span>
							<span>{String.fromCharCode('123')}eGFR: 14, atDate: '2020/04/05' {String.fromCharCode('125')},</span>
							<span>{String.fromCharCode('123')}eGFR: 71.6, atDate: '2019/09/09' {String.fromCharCode('125')} </span>
							<span>]</span>
						</Typography>
					</Card>

					<Typography className="data-example-title" variant="h6" component="h1">
						Addition input information:
					</Typography>
					<Card className="example">
						<Typography className="example-content" color="textSecondary">
							<span>Date format must be in the form 'YYYY/DD/MM'</span>
							<span>eGFR value must both be an integer or float value</span>
						</Typography>
					</Card>
				</div>
			);
		}
		//Default
		return('')
	}
}

export default DataStructure;
