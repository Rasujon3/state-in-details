import React from 'react';

const CategoryDetail = (props) => {
    const {count} = props;
    return (
        <div>
            <h4>Category Detail Page: {count}</h4>
        </div>
    );
};

export default CategoryDetail;