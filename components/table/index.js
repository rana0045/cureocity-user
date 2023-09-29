import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Table(props) {
	const { tableColumns, data } = props;
	return (
		<table className='table-auto w-full'>
			<thead className='h-10'>
				<tr>
					{tableColumns?.map((head, key) => {
						return <th key={key} className='text-xs'>{head}</th>;
					})}
				</tr>
			</thead>
			<tbody>
				{data?.map((item, key) => {
					return (
						<tr key={key} className='text-center text-xs'>
							<td>{item?.s_no}</td>
							<td>{item?.day}</td>
							<td>{item?.glasses}</td>
							<td>{item?.calories}</td>
							<td>{item?.avg_heart_rate}</td>
							<td>{item?.daily_goal}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}