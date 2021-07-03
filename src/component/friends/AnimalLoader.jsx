import React from "react"
import ContentLoader from "react-content-loader";

const AnimalLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={379}
        viewBox="0 0 300 379"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="7" y="0" rx="10" ry="10" width="270" height="251" />
        <rect x="98" y="255" rx="0" ry="0" width="80" height="25" />
        <rect x="62" y="287" rx="0" ry="0" width="156" height="18" />
        <rect x="7" y="310" rx="78" ry="78" width="270" height="68" />
    </ContentLoader>
)

export default AnimalLoader;