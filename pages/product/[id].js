import { getProductItem } from '@/api';
import ProductHeader from '@/components/product/ProductHeader';
import CommonLayout from '@/layouts/CommonLayout';
import axios from 'axios';
import Image from 'next/image';
import React from 'react';

const ProductDetail = ({ goodInfo }) => {
	console.log(goodInfo);
	return (
		<div>
			<ProductHeader title="상세 정보" />
			<div>
				<Image
					src={goodInfo.imageUrl}
					width={300}
					height={200}
					alt={goodInfo.name}
				/>
			</div>
			<p>{goodInfo.name}</p>
			<p>{goodInfo.price}</p>
		</div>
	);
};

export default ProductDetail;

// props를 전달하여서 내용 생성
// 그런데 외부에서 props를 전달받지 않고
// 스스로 props를 전달하고, 스스로 props를 표현하는 html태그를 생성해서 출력함
// SSR임 (Server-Side-Rendering)
// 약속된 Next.js 함수로서 반드시 pages 폴더에서만 작동됨
export async function getServerSideProps(context) {
	// console.log('getServerSideProps : ', context.params.id);
	const id = context.params.id;
	const { data } = await getProductItem(id);
	// console.log(data);
	return {
		props: { goodInfo: data },
	};
}

// 개발자가 레이아웃을 공통으로 사용하고 싶어서 생성한 함수
// 실행은 _app.js에서 실행함
ProductDetail.getLayout = function getLayout(page) {
	return <CommonLayout>{page}</CommonLayout>;
};
