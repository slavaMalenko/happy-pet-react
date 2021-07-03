import React from "react"
import ContentLoader from "react-content-loader";

const AnimalLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={379}
        viewBox="0 0 300 379"
        backgroundColor="#ffc9796a"
        foregroundColor="#ffd6986a"
        {...props}
    >
        <rect x="7" y="0" rx="10" ry="10" width="270" height="251" />
        <rect x="98" y="255" rx="8" ry="8" width="80" height="20" />
        <rect x="63" y="280" rx="17" ry="17" width="156" height="18" />
        <rect x="7" y="304" rx="40" ry="40" width="270" height="68" />
    </ContentLoader>
)

export default AnimalLoader;