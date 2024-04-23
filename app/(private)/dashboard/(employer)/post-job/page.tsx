import Header from '@/components/dashboard/header';

const breadcrumbItems = [
    { title: "Post a Job", link: "/dashboard/post-job" },
]
const PostAJobPage = () => {
    return (
        <>
            <Header
                title='Post a Job'
                items={breadcrumbItems}
            />

        </>
    );
};

export default PostAJobPage;