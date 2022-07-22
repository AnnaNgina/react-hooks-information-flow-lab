import react from "react";

function Filter({ onCategoryChange }) {
    return (
        <div className="Filter">
            <select name="filter" onChange={onCategoryChange}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dessert</option>
                <option value="Dessert">Dairy</option>
            </select>
        </div>
    );
}


export default Filter