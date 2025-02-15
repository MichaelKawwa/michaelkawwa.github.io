import React from "react";
import styled from "styled-components";

import {
	  Table,
	  TableBody,
	  TableDataCell,
	  TableHead,
	  TableHeadCell,
	  TableRow,
	  Window,
	  WindowContent,
	  WindowHeader
	} from 'react95';



function MePokedex() {
	return (
	<Window style={{ width: 320 }}>
	<WindowHeader>Skills_Pokedex.exe</WindowHeader>
	<WindowContent>
	  <Table>
		<TableHead>
		  <TableRow>
			<TableHeadCell>rank</TableHeadCell>
			<TableHeadCell>skill</TableHeadCell>
			<TableHeadCell>Mastery</TableHeadCell>
		  </TableRow>
		</TableHead>
		<TableBody>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			<span role='img' aria-label='fire'>🔥</span>
			</TableDataCell>
			<TableDataCell>React JS</TableDataCell>
			<TableDataCell>90%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='fire'>💯</span>
			</TableDataCell>
			<TableDataCell>Java</TableDataCell>
			<TableDataCell>100%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>⚡</span>
			</TableDataCell>
			<TableDataCell>Swift</TableDataCell>
			<TableDataCell>85%</TableDataCell>
		  </TableRow>
		</TableBody>
	  </Table>
	</WindowContent>
  </Window>  
	)
}

export default MePokedex;