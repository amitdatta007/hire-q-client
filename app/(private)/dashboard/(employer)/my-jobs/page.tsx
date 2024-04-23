import Header from '@/components/dashboard/header';

const breadcrumbItems = [
    { title: "My Jobs", link: "/dashboard/my-jobs" },
]

const MyJobsPage = () => {
    return (
        <>
            <Header
                title='My Jobs'
                items={breadcrumbItems}
            />
        </>
    );
};

export default MyJobsPage;