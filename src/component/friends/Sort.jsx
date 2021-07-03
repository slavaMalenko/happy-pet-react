import React from 'react';
import classNames from 'classnames';

import arrow from '../../assets/img/header/arrow.png';

const Sort = React.memo(({ items, activeItemSort, onClickItem }) => {
    const sortRef = React.useRef();

    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const changeVisiblePopup = () => {
        setVisiblePopup(!visiblePopup);
    }
    const initialVisiblePopup = () => {
        setVisiblePopup(false);
    }

    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])
    function handleOutsideClick(event) {
        const path = event.path || (event.composedPath && event.composedPath())
        if (!path.includes(sortRef.current)) {
            initialVisiblePopup();
        }
    }

    const activeSortLink = items.find(item => item.value === activeItemSort).name;


    return (
        <div className="sort" ref={sortRef} >
            <div className="sort__case">
                <p
                    onClick={changeVisiblePopup}
                    className="sort__case-text">
                    <img className={classNames(
                        "sort__case-img",
                        { "sort__case-img--rotate": visiblePopup }
                    )}
                        src={arrow}
                        alt="" />
                    Сортировать по:
                </p>
                <span className="sort__case-link">{activeSortLink}</span>

                <div className="sort__list">
                    <ul className="sort__list-items">
                        {visiblePopup &&
                            items.map((item, index) => {
                                return (
                                    <li
                                        key={item.value}
                                        onClick={() => {
                                            onClickItem(item.value)
                                            initialVisiblePopup()
                                        }}
                                        className={classNames(
                                            "sort__list-item",
                                            { "sort__list-item--active": activeItemSort === item.value }
                                        )}
                                    >

                                        {item.name}

                                    </li>
                                )
                            })

                        }
                    </ul>
                </div>
            </div>
        </div >
    )
})

export default Sort;