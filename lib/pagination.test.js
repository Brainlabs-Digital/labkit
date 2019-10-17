import * as pagination from './pagination';

describe('generateMetadata', () => {
    it('returns expected metadata', () => {
        const metadata = pagination.generateMetadata(1, 10, 300);
        expect(metadata).toEqual({
            page: 1,
            pageSize: 10,
            totalItems: 300,
            totalPages: 30,
        });
    });

    it('if pageSize is -1 then it returns a pageSize that is equal to the totalItems', () => {
        const metadata = pagination.generateMetadata(1, -1, 300);
        expect(metadata).toEqual({
            page: 1,
            pageSize: 300,
            totalItems: 300,
            totalPages: 1,
        });
    });

    it('if the totalItems is 0 then returns a totalPages of 1', () => {
        const metadata = pagination.generateMetadata(1, 10, 0);
        expect(metadata).toEqual({
            page: 1,
            pageSize: 10,
            totalItems: 0,
            totalPages: 1,
        });
    });

    it('if the page is greater than totalPages then cap the page at totalPages', () => {
        const metadata = pagination.generateMetadata(11, 10, 100);
        expect(metadata).toEqual({
            page: 10,
            pageSize: 10,
            totalItems: 100,
            totalPages: 10,
        });
    });
});

describe('getPageItems', () => {
    const generateItems = () => {
        const items = [];
        for (let i = 1; i <= 100; i += 1) {
            items.push({
                id: i,
                name: `Item ${i}`,
            });
        }
        return items;
    };

    it('returns first five items if page is 1 and pageSize is 5', () => {
        const items = generateItems();
        const metadata = {
            page: 1,
            pageSize: 5,
        };
        const res = pagination.getPageItems(metadata, items);
        expect(res).toEqual([
            {
                id: 1,
                name: 'Item 1',
            },
            {
                id: 2,
                name: 'Item 2',
            },
            {
                id: 3,
                name: 'Item 3',
            },
            {
                id: 4,
                name: 'Item 4',
            },
            {
                id: 5,
                name: 'Item 5',
            },
        ]);
    });

    it('returns last 4 items if page is 25 and pageSize is 4', () => {
        const items = generateItems();
        const metadata = {
            page: 25,
            pageSize: 4,
        };
        const res = pagination.getPageItems(metadata, items);
        expect(res).toEqual([
            {
                id: 97,
                name: 'Item 97',
            },
            {
                id: 98,
                name: 'Item 98',
            },
            {
                id: 99,
                name: 'Item 99',
            },
            {
                id: 100,
                name: 'Item 100',
            },
        ]);
    });

    it('returns no items if page is 11 and pageSize is 10 but there are only 100 items', () => {
        const items = generateItems();
        const metadata = {
            page: 11,
            pageSize: 10,
        };
        const res = pagination.getPageItems(metadata, items);
        expect(res).toEqual([]);
    });
});
