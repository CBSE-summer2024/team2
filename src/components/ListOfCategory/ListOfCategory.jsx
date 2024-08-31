import React, { useEffect } from "react";
// Static import to ensure the custom element is registered

const CategoryListComponent = () => {
    useEffect(() => {
        // Optional: Dynamically import if you want to delay the loading
        import("./category-list");
    }, []);

    return (
        <div>
            <h1>Category List</h1>
            {/* Use the Lit component in React */}
            <category-list></category-list>
        </div>
    );
};


export default CategoryListComponent;

