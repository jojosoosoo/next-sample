import BlogLayout from '@/layouts/BlogLayout';

const Blog = () => {
	return <div>블로그 첫 페이지</div>;
};

export default Blog;

Blog.getLayout = function getLayout(page) {
	return <BlogLayout>{page}</BlogLayout>;
};
