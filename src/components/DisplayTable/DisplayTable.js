import React from 'react';

//Table Imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class DisplayTable extends React.Component {
	tableColumns;
	tableRows;

	constructor(props) {
		super(props);

		this.tableColumns = props.columns;
		this.tableRows = props.rows;
	}

	createRow(row){
		return (
			this.tableColumns.map((column, index) => (
				<TableCell key={index.toString()}>{row[column.field]}</TableCell>
			))
		)
	}

	render() {
		return (
			<div className="table-container">
				<TableContainer component={Paper}>
					<Table className="table" aria-label="simple table">
						<TableHead>
							<TableRow key={5+5}>
								{ this.tableColumns.map((column, index) => (
									<TableCell key={index.toString()}>{column.headerName}</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{
								this.tableRows.map((row, index) => (
									<TableRow key={index.toString()}>
										{this.createRow(row)}
									</TableRow>
								))
							}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		)
	}
}
export default DisplayTable;
