import React from 'react';
import SideNav from './sidenav';
import Header from './header';

export default function Layout({ children }) {
	return (
		<div className='flex flex-col max-w-screen w-full'>
			<Header />
			<div className='flex flex-row min-h-screen max-w-screen w-full'>
				<SideNav />
				<main className='w-full min-h-screen flex flex-col items-center'>{children}</main>
			</div>
		</div>
	);
}
