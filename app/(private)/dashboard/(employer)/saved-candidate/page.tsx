import Header from '@/components/dashboard/header';

const breadcrumbItems = [
    { title: "Saved Candidate", link: "/dashboard/saved-candidate" },
]

const SavedCandidatePage = () => {
    return (
        <>
            <Header
                title='Saved Candidate'
                items={breadcrumbItems}
            />
        </>
    );
};

export default SavedCandidatePage;