import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Image from 'next/image';
import Layout from '../../components/layout';
import TopBar from '@/components/top-bar';

export default function Appointments() {
	const data = [
		{
			diagnosis: 'Eye infection',
			platform_record: true,
			visibility: false,
		},
		{
			diagnosis: 'Glaucoma',
			platform_record: false,
			visibility: true,
		},
		{
			diagnosis: 'Diabetes',
			platform_record: true,
			visibility: false,
		},
	];

	return (
		<Layout>
			<TopBar />
			<TableContainer className='rounded-xl shadow-lg bg-gray-100 max-w-7xl mt-20'>
				<Table className="w-full" style={{ borderCollapse: 'collapse' }}>
					<TableHead>
						<TableRow>
							<TableCell>
								<div className="font-bold text-lg text-center text-gray-500">Diagnosis</div>
							</TableCell>
							<TableCell>
								<div className="font-bold text-lg text-center text-gray-500">Platform Record</div>
							</TableCell>
							<TableCell>
								<div className="font-bold text-lg text-center text-gray-500">Visibility</div>
							</TableCell>
							<TableCell>
								<div className="font-bold text-lg text-center text-gray-500">Reports</div>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((item, key) => (
							<TableRow key={key}>
								<TableCell>
									<div className='text-center'>{item.diagnosis}</div>
								</TableCell>
								<TableCell>
									<div className='text-center'>
										{item.platform_record ? (
											<CheckCircleIcon className="text-green-500 w-6 h-6" />
										) : (
											<CancelIcon className="text-red-500 w-6 h-6" />
										)}
									</div>
								</TableCell>
								<TableCell>
									<div className='text-center'>
										{item.visibility ? (
											<VisibilityIcon className="text-blue-500 w-6 h-6" />
										) : (
											<VisibilityOffIcon className="text-gray-500 w-6 h-6" />
										)}
									</div>
								</TableCell>
								<TableCell>
									<div className="flex gap-2 justify-center">
										<Image src="/icons/download.svg" alt="download" width={25} height={25} />
										<Image src="/icons/view.svg" alt="view" width={30} height={30} />
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Layout>
	);
};