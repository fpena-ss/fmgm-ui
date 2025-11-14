import { useHomeQuery } from "../../../api/queries/home.query";
import type { Home as HomeType } from "../../../interfaces/home";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';


export const Home = () => {
    const { data, isLoading, error } = useHomeQuery();
    const home: HomeType['data'] = data?.data;
    
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-7xl flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">{home?.title}</h1>
            <img src={`${import.meta.env.VITE_API_URL}${home?.logo?.url}`} alt={home?.title} />
            <div className="prose prose-lg">
                <BlocksRenderer content={home?.body as unknown as BlocksContent} />
            </div>
        </div>
    </div>
  )
}