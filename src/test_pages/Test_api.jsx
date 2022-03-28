import React, { useState } from 'react';
import { publicRequest } from '../requestMethods';

const Test_api = () => {
	const [searchItem, setSearchItem] = useState('dancing queen');

	const [content, setContent] = useState([]);
	const [maxQuery, setMaxQuery] = useState(7);
	var queried = 0;

	const isGif = (url) => {
		return /\.(gif)$/.test(url);
	};
	return (
		<div>
			<div
				style={{
					width: '92%',
					margin: '4%',
				}}
			>
				<input
					style={{
						fontSize: '400%',
						width: '40%',
						margin: '4%',
					}}
					type='text'
					onChange={(event) => {
						setSearchItem(event.target.value);
					}}
					placeholder='eg: dancing queen'
				/>
				<button
					style={{
						fontSize: '400%',
						width: '40%',
						margin: '4%',
					}}
					onClick={() => {
						const getSearchResults = async () => {
							try {
								const res = await publicRequest.get(
									'test_ddg/' + searchItem + ' gif'
								);
								setContent(res.data);
								queried = 0;
							} catch {}
						};

						searchItem.trim().length > 0 && getSearchResults();
					}}
				>
					GET IMAGES!
				</button>
			</div>
			<br></br>
			<div style={{ marginTop: '200px' }}>
				{content.map((c, i) => {
					if (queried < maxQuery && isGif(c.image)) {
						queried++;
						return <img key={i} src={c.image} alt={c.title} width='400px' />;
					} else {
						return null;
					}
				})}
			</div>
			<br></br>
			<button
				style={{ fontSize: '500%', width: '92%', margin: '4%' }}
				onClick={() => {
					setMaxQuery(maxQuery + 10);
				}}
			>
				LOAD MORE
			</button>
		</div>
	);
};

export default Test_api;
