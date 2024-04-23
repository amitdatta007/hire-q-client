import EmployerOverview from '@/components/dashboard/employer-overview';
import Header from '@/components/dashboard/header';
import React from 'react';

const DashboardPage = () => {
    return (
        <>  
            <Header
                title="My Jobs"
                subTitle="560"
                description="Here Is Your Daily"
            />
            <EmployerOverview />
        </>
    );
};

export default DashboardPage;