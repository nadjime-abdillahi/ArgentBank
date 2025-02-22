import { useEffect } from "react";
import { FeaturesList } from "../../components/featuresList/featuresList";
import { HeroHeader } from "../../components/heroHeader/HeroHeader";

export const Home = ({ pTitle }) => {

    // ajouter le titre de cette page
    useEffect(() => {
        pTitle("Home Page");
    },[pTitle]);

    return (
        <main className="main">
            <HeroHeader />
            <FeaturesList />
        </main>
    );
};