import { createContext, useContext, useState, useEffect } from "react";
import { client } from "../lib/client";

const productsDataContext = createContext();

export function ProductsDataContextProvider({ children }) {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);
        try {
            const query = "*[_type == 'products']";
            const products = await client.fetch(query);
            setProductsData(products);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const contextValue = {
        productsData,
        loading,
        error,
        refetchData: fetchData,
    };

    return (
        <productsDataContext.Provider value={contextValue}>
            {children}
        </productsDataContext.Provider>
    );
}

export const useProductsData = () => {
    return useContext(productsDataContext);
};
