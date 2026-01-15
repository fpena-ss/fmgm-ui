import { useHomeQuery } from "@api/queries/home.query";
import type { Home as HomeType } from "@interfaces/home";
import { Loading } from "@shared/components/Loading";
import { ErrorMessage } from "@shared/components/ErrorMessage";
import { DynamicZone } from "@shared/components/sections";

export const Home = () => {
    const { data, isLoading, error } = useHomeQuery();
    const home: HomeType['data'] = data?.data;
    
    if (isLoading) return <Loading />;
    if (error) return <ErrorMessage message={error.message} />;

    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto px-6">
                {home?.Body && <DynamicZone components={home.Body} />}
            </div>
        </section>
    );
}
