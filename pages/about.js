import CommonLayout from '@/layouts/CommonLayout';

const About = () => {
	return <div>서비스 소개</div>;
};

export default About;

About.getLayout = function getLayout(page) {
	return <CommonLayout>{page}</CommonLayout>;
};
