import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { getProducts } from '@/api';

const ProductList = () => {
	// CSR로 내용을 채워 줌
	// Hydration (하이드레이션)
	const [goods, setGoods] = useState([]);
	const getGoods = async () => {
		try {
			const { data } = await getProducts();
			setGoods(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getGoods();
	}, []);
	return (
		<ul>
			{goods &&
				goods.map(item => (
					<li key={item.id} className={styles.productitem}>
						<Link href={`/product/${item.id}`}>
							<div>
								{/* <img src={item.imageUrl} alt="item.name" /> */}
								<Image
									src={item.imageUrl}
									width={300}
									height={200}
									alt={item.name}
								/>
							</div>
							<div>{item.name}</div>
						</Link>
					</li>
				))}
		</ul>
	);
};

export default ProductList;
