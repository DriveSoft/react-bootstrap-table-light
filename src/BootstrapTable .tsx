import React from 'react'
import Table from "react-bootstrap/Table";
import { useState, useEffect } from 'react';
import { Header } from './Header'
import TableData from './TableData'
import { ColumnsStructureTable, DataStructureTable } from './interfaces'


interface BootstrapTableProps {	
	columns: ColumnsStructureTable[];
	data: DataStructureTable[] | undefined;
	sortField?: string;
	sortAsc?: boolean;	
	size?: string; // sm
	variant?: string; // dark
  	OnClickButtons?: (rowData: any, idButton: string) => void;
	noDataTitle?: string;
}

export function BootstrapTable({
	columns,
	data,
	sortField,
	sortAsc = true,
	size,
	variant,
	OnClickButtons,
	noDataTitle = 'no data'
}: BootstrapTableProps) {

	const [sortState, setSortState] = useState({
		sortField: sortField,
		sortAsc: sortAsc,
	});

	const [dataTable, setDataTable] = useState(data);

	useEffect(() => {
		setDataTable(data);
	}, [data]);


	return (
		<Table striped bordered hover size={size} variant={variant}>
			<thead>
				<tr><Header header={columns} sortState={sortState} setSortState={setSortState} /></tr>
			</thead>
			<tbody>
				<TableData columns={columns} data={dataTable} sortState={sortState} noDataTitle={noDataTitle} OnClickButtons={OnClickButtons}/>
			</tbody>
		</Table>
	);
}

