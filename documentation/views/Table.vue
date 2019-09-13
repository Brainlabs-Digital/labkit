<template>
    <lk-content>
        <h1>Table</h1>
        <p>The table component (<code>lk-table</code>)&hellip;</p>
        <p>The current implementation of this component is designed to be as flexible as possible when it comes to filtering, selecting and sorting, only providing a minimal UI and delegating such functionality to the parent component. This is done to allow for server side searching, filtering and sorting.</p>
        <h3>Table with all the things</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <everything-table/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="everythingSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="everythingSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Basic table</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <basic-table/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="basicSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="basicSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Table flush to the edges</h3>
        <p>There are times when we want the table to be flush to the edges of it's container. The <code>flush</code> prop can be used to achieve this.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <lk-panel margin-bottom="content">
                    <lk-panel-body 
                        padding="none"
                        padding-bottom="none">
                        <flush-table/>
                    </lk-panel-body>
                </lk-panel>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="flushSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="flushSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Table with action items</h3>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <action-items-table/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="actionItemsSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="actionItemsSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Table with sorting</h3>
        <p>The table component provides an interface for sorting items, but actual sorting is handled by the table's parent component using a computed value, as demonstrated in the example below.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <sorting-table/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="sortingSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="sortingSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Table with selecting</h3>
        <p>The table component provides an interface for selecting individual items (and bulk selection), but actual selection is handled by the table's parent component, as demonstrated in the example below.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <selecting-table/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="selectingSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="selectingSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Table with filtering</h3>
        <p>The table component does not directly provide any filtering interface, functionality or utility.</p>
        <p>Filtering is achieved by applying the filter on the items before passing them to the table component. The best way to do this is using a computed value and the <code>Array.prototype.filter()</code> function, as demonstrated below.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <filtering-table/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="filteringSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="filteringSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
        <h3>Table with pagination</h3>
        <p>The table component provides an interface for switching pages, but actual pagination is handled by the table's parent component.</p>
        <p>Pagination is achieved by using [LIST UTILITY FUNCTIONS], as demonstrated in the example below.</p>
        <lk-panel margin-bottom="content">
            <lk-panel-body>
                <paging-table/>
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="pagingSampleScript"
                    language="js"
                />
            </lk-panel-body>
            <lk-panel-body 
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="pagingSampleTemplate"
                    language="html"
                    rounded-bottom-corners
                />
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import ActionItemsTable from '@/labkit/documentation/components/examples/table/ActionItems';
import BasicTable from '@/labkit/documentation/components/examples/table/Basic';
import Code from '@/labkit/documentation/components/Code';
import EverythingTable from '@/labkit/documentation/components/examples/table/Everything';
import FilteringTable from '@/labkit/documentation/components/examples/table/Filtering';
import FlushTable from '@/labkit/documentation/components/examples/table/Flush';
import PagingTable from '@/labkit/documentation/components/examples/table/Paging';
import SelectingTable from '@/labkit/documentation/components/examples/table/Selecting';
import SortingTable from '@/labkit/documentation/components/examples/table/Sorting';

export default {
    components: {
        ActionItemsTable,
        BasicTable,
        EverythingTable,
        FilteringTable,
        FlushTable,
        formatCode: Code,
        PagingTable,
        SelectingTable,
        SortingTable,
    },
    data() {
        return {
            actionItemsSampleScript: `
// Component <script> content
export default {
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    width: '50%',
                },
            ],
            items: [
                {
                    count: 12345,
                    id: 1,
                    info: 'A short bit of information about Item 1.',
                    link: 'https://example.com/item-1',
                    name: 'Item 1',
                },
                {
                    count: 2345,
                    id: 2,
                    info: 'A short bit of information about Item 2.',
                    link: 'https://example.com/item-2',
                    name: 'Item 2',
                },
                {
                    count: 345,
                    id: 3,
                    info: 'A short bit of information about Item 3.',
                    link: 'https://example.com/item-3',
                    name: 'Item 3',
                },
            ],
        };
    },
};
            `,
            actionItemsSampleTemplate: `
<!-- Component <template> content -->
<lk-table
    :columns="columns"
    :items="items"
>
    <template slot-scope="{item, styles}">
        <td>
            <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
            <p>{{item.info}}</p>
        </td>
        <td>
            <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
            <p><span :class="styles.label">Count:</span> {{item.count}}</p>
        </td>
        <td :class="styles['action-items']">
            <lk-button mini margin-bottom="none" primary>
                Primary
            </lk-button>
            <lk-button mini margin-bottom="none" outline primary>
                Secondary
            </lk-button>
            <lk-dropdown-button
                circle
                end
                :items="[
                    {
                        callback: () => {},
                        label: 'Third action',
                    },
                    {
                        callback: () => {},
                        label: 'Fourth action',
                    },
                ]"
                mini
                margin-bottom="none"
                outline
                primary
            >
                <lk-icon icon="ellipsis-v"></lk-icon>
            </lk-dropdown-button>
        </td>
    </template>
</lk-table>
            `,
            basicSampleScript: `
// Component <script> content
export default {
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    width: '50%',
                },
            ],
            items: [
                {
                    count: 12345,
                    id: 1,
                    info: 'A short bit of information about Item 1.',
                    link: 'https://example.com/item-1',
                    name: 'Item 1',
                },
                {
                    count: 2345,
                    id: 2,
                    info: 'A short bit of information about Item 2.',
                    link: 'https://example.com/item-2',
                    name: 'Item 2',
                },
                {
                    count: 345,
                    id: 3,
                    info: 'A short bit of information about Item 3.',
                    link: 'https://example.com/item-3',
                    name: 'Item 3',
                },
            ],
        };
    },
};
            `,
            basicSampleTemplate: `
<!-- Component <template> content -->
<lk-table
    :columns="columns"
    :items="items"
>
    <template slot-scope="{item, styles}">
        <td>
            <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
            <p>{{item.info}}</p>
        </td>
        <td>
            <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
            <p><span :class="styles.label">Count:</span> {{item.count}}</p>
        </td>
    </template>
</lk-table>
            `,
            everythingSampleScript: `
// Component <script> content
import orderBy from 'lodash.orderby';
import * as pagination from '@/labkit/lib/pagination';

export default {
    computed: {
        filteredItems() {
            const lowerCaseSearchString = this.searchString.toLowerCase();
            return this.items.filter((item) => {
                return item.name.toLowerCase().includes(lowerCaseSearchString);
            });
        },
        paginationMetadata() {
            return pagination.generateMetadata(
                this.page,
                this.pageSize,
                this.sortedItems.length,
            );
        },
        pageItems() {
            return pagination.getPageItems(
                this.paginationMetadata,
                this.sortedItems,
            );
        },
        selectedItemsMessage() {
            if (this.selectedItemIds.size === 1) {
                return \`There is \${this.selectedItemIds.size} selected item.\`;
            } else {
                return \`There are \${this.selectedItemIds.size} selected items.\`;
            }
        },
        sortedItems() {
            return orderBy(
                this.filteredItems,
                [this.sortSettings.key, 'name'], // 'name' is used as a secondary sorting field if the primary fields are equal.
                [this.sortSettings.order, this.sortSettings.order],
            );
        },
    },
    created() {
        for (let i = 1; i <= 1000; i += 1) {
            this.items.push({
                count: i * i,
                id: i,
                info: \`A short bit of information about Item \${i}.\`,
                link: \`https://example.com/item-\${i}\`,
                name: \`Item \${i}\`,
            });
        }
    },
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    sortableItems: [
                        {
                            key: 'id',
                            label: 'ID',
                        },
                        {
                            key: 'name',
                            label: 'Name',
                        },
                    ],
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    sortableItems: [
                        {
                            key: 'link',
                            label: 'Link',
                        },
                        {
                            key: 'count',
                            label: 'Count',
                        },
                    ],
                    width: '50%',
                },
            ],
            items: [],
            page: 1,
            pageSize: 5,
            searchString: '',
            selectedItemIds: new Set(),
            sortSettings: {
                columnIndex: 0,
                key: 'name',
                order: 'asc',
            },
        };
    },
    methods: {
        addAllItemsToSelection() {
            this.selectedItemIds = new Set(this.items.map(({id}) => id));
        },
        addItemsToSelection(itemIds) {
            for (const itemId of itemIds) {
                this.selectedItemIds.add(itemId);
            }
            this.selectedItemIds = new Set([...this.selectedItemIds.values()]);
        },
        removeAllItemsFromSelection() {
            this.selectedItemIds = new Set();
        },
        removeItemsFromSelection(itemIds) {
            for (const itemId of itemIds) {
                this.selectedItemIds.delete(itemId);
            }
            this.selectedItemIds = new Set([...this.selectedItemIds.values()]);
        },
        resetPage() {
            this.page = 1;
        },
        setPage(page) {
            this.page = page;
        },
        setSortSettings(sortSettings) {
            this.sortSettings = {...sortSettings};
        },
    },
    watch: {
        filteredItems() {
            this.resetPage();
        },
    },
};
            `,
            everythingSampleTemplate: `
<!-- Component <template> content -->
<lk-input v-model="searchString">
    <template slot="label">Name filter</template>
    <template slot="hint">
        <p>Type a name in below to filter out other table items.</p>
        <p><strong>Hint: </strong><em>Type numbers to see the filter gradually filter out items.</em></p>
    </template>
</lk-input>
<lk-divider margin-bottom="content"></lk-divider>
<lk-content>
    <p>{{selectedItemsMessage}}</p>
</lk-content>
<lk-alert v-if="filteredItems.length === 0" empty>
    <template slot="content">
        <p>Your search for '<strong><em>{{searchString}}</em></strong>' did not match any items.</p>
    </template>
</lk-alert>
<lk-panel v-else>
    <lk-panel-body padding="none"
 padding-bottom="none">
        <lk-table
            :columns="columns"
            flush
            :items="pageItems"
            :page="page"
            :total-pages="paginationMetadata.totalPages"
            :selected-item-ids="selectedItemIds"
            :sort-settings="sortSettings"
            @deselected:all-items="removeAllItemsFromSelection"
            @deselected:items="removeItemsFromSelection"
            @selected:items="addItemsToSelection"
            @selected:all-items="addAllItemsToSelection"
            @updated:page="setPage"
            @updated:sort-settings="setSortSettings"
        >
            <template slot-scope="{item, styles}">
                <td>
                    <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
                    <p>{{item.info}}</p>
                </td>
                <td>
                    <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
                    <p><span :class="styles.label">Count:</span> {{item.count}}</p>
                </td>
                <td :class="styles['action-items']">
                    <lk-button mini margin-bottom="none" primary>
                        Primary
                    </lk-button>
                    <lk-button mini margin-bottom="none" outline primary>
                        Secondary
                    </lk-button>
                    <lk-dropdown-button
                        circle
                        end
                        :items="[
                            {
                                callback: () => {},
                                label: 'Third action',
                            },
                            {
                                callback: () => {},
                                label: 'Fourth action',
                            },
                        ]"
                        mini
                        margin-bottom="none"
                        outline
                        primary
                    >
                        <lk-icon icon="ellipsis-v"></lk-icon>
                    </lk-dropdown-button>
                </td>
            </template>
        </lk-table>
    </lk-panel-body>
</lk-panel>
            `,
            filteringSampleScript: `
// Component <script> content
export default {
    computed: {
        filteredItems() {
            const lowerCaseSearchString = this.searchString.toLowerCase();
            return this.items.filter((item) => {
                return item.name.toLowerCase().includes(lowerCaseSearchString);
            });
        },
    },
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    width: '50%',
                },
            ],
            items: [
                {
                    count: 12345,
                    id: 1,
                    info: 'A short bit of information about A.',
                    link: 'https://example.com/a',
                    name: 'Item A',
                },
                {
                    count: 2345,
                    id: 2,
                    info: 'A short bit of information about Item AB.',
                    link: 'https://example.com/ab',
                    name: 'Item AB',
                },
                {
                    count: 345,
                    id: 3,
                    info: 'A short bit of information about Item ABC.',
                    link: 'https://example.com/abc',
                    name: 'Item ABC',
                },
                {
                    count: 345,
                    id: 4,
                    info: 'A short bit of information about Item ABCD.',
                    link: 'https://example.com/abcd',
                    name: 'Item ABCD',
                },
            ],
            searchString: '',
        };
    },
};
            `,
            filteringSampleTemplate: `
<!-- Component <template> content -->
<lk-input v-model="searchString">
    <template slot="label">Name filter</template>
    <template slot="hint">
        <p>Type a name in below to filter out other table items.</p>
        <p><strong>Hint: </strong><em>Type 'bcd' to see the filter gradually filter out items.</em></p>
    </template>
</lk-input>
<lk-divider margin-bottom="content"></lk-divider>
<lk-alert v-if="filteredItems.length === 0" empty>
    <template slot="content">
        <p>Your search for '<strong><em>{{searchString}}</em></strong>' did not match any items.</p>
    </template>
</lk-alert>
<lk-table
    v-else
    :columns="columns"
    :items="filteredItems"
>
    <template slot-scope="{item, styles}">
        <td>
            <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
            <p>{{item.info}}</p>
        </td>
        <td>
            <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
            <p><span :class="styles.label">Count:</span> {{item.count}}</p>
        </td>
    </template>
</lk-table>
            `,
            flushSampleScript: `
// Component <script> content
export default {
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    width: '50%',
                },
            ],
            items: [
                {
                    count: 12345,
                    id: 1,
                    info: 'A short bit of information about Item 1.',
                    link: 'https://example.com/item-1',
                    name: 'Item 1',
                },
                {
                    count: 2345,
                    id: 2,
                    info: 'A short bit of information about Item 2.',
                    link: 'https://example.com/item-2',
                    name: 'Item 2',
                },
                {
                    count: 345,
                    id: 3,
                    info: 'A short bit of information about Item 3.',
                    link: 'https://example.com/item-3',
                    name: 'Item 3',
                },
            ],
        };
    },
};
            `,
            flushSampleTemplate: `
<!-- Component <template> content -->
<lk-table
    :columns="columns"
    flush
    :items="items"
    rounded-bottom-corners
>
    <template slot-scope="{item, styles}">
        <td>
            <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
            <p>{{item.info}}</p>
        </td>
        <td>
            <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
            <p><span :class="styles.label">Count:</span> {{item.count}}</p>
        </td>
    </template>
</lk-table>
            `,
            pagingSampleScript: `
// Component <script> content
import * as pagination from '@/labkit/lib/pagination';

export default {
    computed: {
        paginationMetadata() {
            return pagination.generateMetadata(
                this.page,
                this.pageSize,
                this.items.length,
            );
        },
        pageItems() {
            return pagination.getPageItems(this.paginationMetadata, this.items);
        },
    },
    created() {
        for (let i = 1; i <= 100; i += 1) {
            this.items.push({
                count: i * i,
                id: i,
                info: \`A short bit of information about Item \${i}.\`,
                link: \`https://example.com/item-\${i}\`,
                name: \`Item \${i}\`,
            });
        }
    },
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    width: '50%',
                },
            ],
            items: [],
            page: 1,
            pageSize: 5,
        };
    },
    methods: {
        setPage(page) {
            this.page = page;
        },
    },
};
            `,
            pagingSampleTemplate: `
<!-- Component <template> content -->
<lk-table
    :columns="columns"
    :items="pageItems"
    :page="page"
    :total-pages="paginationMetadata.totalPages"
    @updated:page="setPage"
>
    <template slot-scope="{item, styles}">
        <td>
            <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
            <p>{{item.info}}</p>
        </td>
        <td>
            <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
            <p><span :class="styles.label">Count:</span> {{item.count}}</p>
        </td>
    </template>
</lk-table>
            `,
            selectingSampleScript: `
// Component <script> content
export default {
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    width: '50%',
                },
            ],
            items: [
                {
                    count: 12345,
                    id: 1,
                    info: 'A short bit of information about Item 1.',
                    link: 'https://example.com/item-1',
                    name: 'Item 1',
                },
                {
                    count: 2345,
                    id: 2,
                    info: 'A short bit of information about Item 2.',
                    link: 'https://example.com/item-2',
                    name: 'Item 2',
                },
                {
                    count: 345,
                    id: 3,
                    info: 'A short bit of information about Item 3.',
                    link: 'https://example.com/item-3',
                    name: 'Item 3',
                },
            ],
            selectedItemIds: new Set(),
        };
    },
    methods: {
        addAllItemsToSelection() {
            this.selectedItemIds = new Set(this.items.map(({id}) => id));
        },
        addItemsToSelection(itemIds) {
            for (const itemId of itemIds) {
                this.selectedItemIds.add(itemId);
            }
            this.selectedItemIds = new Set([...this.selectedItemIds.values()]);
        },
        removeAllItemsFromSelection() {
            this.selectedItemIds = new Set();
        },
        removeItemsFromSelection(itemIds) {
            for (const itemId of itemIds) {
                this.selectedItemIds.delete(itemId);
            }
            this.selectedItemIds = new Set([...this.selectedItemIds.values()]);
        },
    },
};
            `,
            selectingSampleTemplate: `
<!-- Component <template> content -->
<lk-table
    :columns="columns"
    :items="items"
    :selected-item-ids="selectedItemIds"
    @deselected:all-items="removeAllItemsFromSelection"
    @deselected:items="removeItemsFromSelection"
    @selected:items="addItemsToSelection"
    @selected:all-items="addAllItemsToSelection"
>
    <template slot-scope="{item, styles}">
        <td>
            <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
            <p>{{item.info}}</p>
        </td>
        <td>
            <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
            <p><span :class="styles.label">Count:</span> {{item.count}}</p>
        </td>
    </template>
</lk-table>
            `,
            sortingSampleScript: `
// Component <script> content
import orderBy from 'lodash.orderby';

export default {
    computed: {
        sortedItems() {
            return orderBy(
                this.items,
                [this.sortSettings.key, 'name'], // 'name' is used as a secondary sorting field if the primary fields are equal.
                [this.sortSettings.order, this.sortSettings.order],
            );
        },
    },
    data() {
        return {
            columns: [
                {
                    label: 'Things',
                    sortableItems: [
                        {
                            key: 'name',
                            label: 'Name',
                        },
                    ],
                    width: '50%',
                },
                {
                    label: 'Extra things',
                    sortableItems: [
                        {
                            key: 'link',
                            label: 'Link',
                        },
                        {
                            key: 'count',
                            label: 'Count',
                        },
                    ],
                    width: '50%',
                },
            ],
            items: [
                {
                    count: 12345,
                    id: 1,
                    info: 'A short bit of information about Item 1.',
                    link: 'https://example.com/item-1',
                    name: 'Item 1',
                },
                {
                    count: 2345,
                    id: 2,
                    info: 'A short bit of information about Item 2.',
                    link: 'https://example.com/item-2',
                    name: 'Item 2',
                },
                {
                    count: 345,
                    id: 3,
                    info: 'A short bit of information about Item 3.',
                    link: 'https://example.com/item-3',
                    name: 'Item 3',
                },
            ],
            sortSettings: {
                columnIndex: 0,
                key: 'name',
                order: 'asc',
            },
        };
    },
    methods: {
        setSortSettings(sortSettings) {
            this.sortSettings = {...sortSettings};
        },
    },
};
            `,
            sortingSampleTemplate: `
<!-- Component <template> content -->
<lk-table
    :columns="columns"
    :items="sortedItems"
    :sort-settings="sortSettings"
    @updated:sort-settings="setSortSettings"
>
    <template slot-scope="{item, styles}">
        <td>
            <p :class="styles.title"><a :href="item.link">{{item.name}}</a></p>
            <p>{{item.info}}</p>
        </td>
        <td>
            <p><span :class="styles.label">Link: </span><a :href="item.link">{{item.link}}</a></p>
            <p><span :class="styles.label">Count:</span> {{item.count}}</p>
        </td>
    </template>
</lk-table>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';
</style>
