import React, { useEffect } from "react";
import "./category-list"; // Adjust the path according to your file structure

const CategoryListComponent = () => {
    useEffect(() => {
        // This will make sure the custom element is available after the React component mounts
        import("./category-list");
    }, []);

    return (
        <div>
            <h1>Category List</h1>
            {/* Using the Lit component in React */}
            <category-list></category-list>
        </div>
    );
};

export default CategoryListComponent;
