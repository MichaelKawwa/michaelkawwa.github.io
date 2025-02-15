import React from "react";
import styled from "styled-components";

import {
	ScrollView,
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
	<Window style={{ width: 320, height: '100%'}}>
	<WindowHeader>Skills_Pokedex.exe</WindowHeader>
	<WindowContent> 
	  <Table>
	  <ScrollView style={{ width: '100%', height: '60vh' }}> 
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
			<span role='img' aria-label='fire'>🤔</span>
			</TableDataCell>
			<TableDataCell>Problem-Solving</TableDataCell>
			<TableDataCell>100%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			<span role='img' aria-label='fire'>🤝</span>
			</TableDataCell>
			<TableDataCell>Teamwork</TableDataCell>
			<TableDataCell>100%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='fire'>😺</span>
			</TableDataCell>
			<TableDataCell>Git/GitHub</TableDataCell>
			<TableDataCell>95%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			<span role='img' aria-label='fire'>⚛️</span>
			</TableDataCell>
			<TableDataCell>React JS</TableDataCell>
			<TableDataCell>90%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			<span role='img' aria-label='fire'>✅</span>
			</TableDataCell>
			<TableDataCell>Javascript</TableDataCell>
			<TableDataCell>90%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='fire'>♨️</span>
			</TableDataCell>
			<TableDataCell>Java</TableDataCell>
			<TableDataCell>90%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>⚡</span>
			</TableDataCell>
			<TableDataCell>Swift/Xcode</TableDataCell>
			<TableDataCell>85%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>🤖</span>
			</TableDataCell>
			<TableDataCell>C programming</TableDataCell>
			<TableDataCell>80%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>🐍</span>
			</TableDataCell>
			<TableDataCell>Python</TableDataCell>
			<TableDataCell>90%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>🟢</span>
			</TableDataCell>
			<TableDataCell>Node JS</TableDataCell>
			<TableDataCell>95%</TableDataCell>
		  </TableRow>
		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>🌐</span>
			</TableDataCell>
			<TableDataCell>MERN Stack</TableDataCell>
			<TableDataCell>90%</TableDataCell>
		  </TableRow>
		<TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>💎</span>
			</TableDataCell>
			<TableDataCell>Ruby</TableDataCell>
			<TableDataCell>75%</TableDataCell>
		  </TableRow>
		<TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>🦾</span>
			</TableDataCell>
			<TableDataCell>X86 Assembly</TableDataCell>
			<TableDataCell>75%</TableDataCell>
		  </TableRow>

		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>🚀</span>
			</TableDataCell>
			<TableDataCell>MIPS Assembly</TableDataCell>
			<TableDataCell>75%</TableDataCell>
		  </TableRow>

		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>📟</span>
			</TableDataCell>
			<TableDataCell>Bash</TableDataCell>
			<TableDataCell>70%</TableDataCell>
		  </TableRow>

		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>🆆</span>
			</TableDataCell>
			<TableDataCell>Wordpress</TableDataCell>
			<TableDataCell>80%</TableDataCell>
		  </TableRow>


		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>☁️</span>
			</TableDataCell>
			<TableDataCell>AWS</TableDataCell>
			<TableDataCell>60%</TableDataCell>
		  </TableRow>

		  <TableRow>
			<TableDataCell style={{ textAlign: 'center' }}>
			  <span role='img' aria-label='lightning'>📡</span>
			</TableDataCell>
			<TableDataCell>GCP</TableDataCell>
			<TableDataCell>60%</TableDataCell>
		  </TableRow>
		  
		  </TableBody>
		  </ScrollView>
	  </Table>

	</WindowContent>
  </Window>  
	)
}

export default MePokedex;