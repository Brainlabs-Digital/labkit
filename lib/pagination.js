export function generateMetadata(page, pageSize, totalItems) {
    const paginationData = {
        page: Number(page),
        pageSize: Number(pageSize),
        totalItems,
    };
    if (paginationData.pageSize === -1) {
        paginationData.page = 1;
        paginationData.pageSize = totalItems;
    }
    paginationData.totalPages = Math.ceil(totalItems / paginationData.pageSize);
    if (paginationData.totalPages === 0) {
        paginationData.totalPages = 1;
    }
    if (paginationData.page > paginationData.totalPages) {
        paginationData.page = paginationData.totalPages;
    }
    return paginationData;
}

export function getPageItems(metadata, items) {
    return items.slice(
        (metadata.page - 1) * metadata.pageSize,
        metadata.page * metadata.pageSize,
    );
}
