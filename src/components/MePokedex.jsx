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
			<TableHeadCell>Type</TableHeadCell>
			<TableHeadCell>Name</TableHeadCell>
			<TableHeadCell disabled>Level</TableHeadCell>
		  </TableRow>
		</TableHead>
		<TableBody>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='LEAF'>🌿</span>
			</TableDataCell>
			<TableDataCell>Bulbasaur</TableDataCell>
			<TableDataCell>64</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='fire'>🔥</span>
			</TableDataCell>
			<TableDataCell>Charizard</TableDataCell>
			<TableDataCell>209</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>⚡</span>
			</TableDataCell>
			<TableDataCell>Pikachu</TableDataCell>
			<TableDataCell>82</TableDataCell>
		  </TableRow>
		</TableBody>
	  </Table>
	</WindowContent>
  </Window>  
	)
}

export default MePokedex;