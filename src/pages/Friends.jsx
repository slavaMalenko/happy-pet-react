import React from 'react';

import Sort from '../component/friends/Sort';
import Categories from '../component/friends/Categories';
import Animals from '../component/friends/Animals';

function Friends() {
    return (
        <section className="friends">
            <div className="categories">
                <Sort />

                <Categories />
            </div>

            <Animals />
        </section>
    )
}

export default Friends;