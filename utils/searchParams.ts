interface Items {
    title?: string,
    location?: string,
}

export const createSearchParams = ({ title, location }: Items) => {
    const url = new URLSearchParams(window.location.search)

    !!title?.trim() && url.set('title', title)
    !!location?.trim() && url.set('location', location)

    return `${url}`
}