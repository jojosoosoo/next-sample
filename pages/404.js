import CommonLayout from '@/layouts/CommonLayout';

const NotFoundPage = () => {
	return <div>주소가 잘못되었습니다</div>;
};

export default NotFoundPage;

NotFoundPage.getLayout = function getLayout(page) {
	return <CommonLayout>{page}</CommonLayout>;
};
