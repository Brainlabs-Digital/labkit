<template>
    <lk-content>
        <h1>Search Select</h1>
        <p>
            A Select / Drop Down with search (
            <code>lk-search-select</code>)&hellip;
        </p>
        <p>
            <code>optionDisplayField</code> is not provided - so the default "name" property in the option array is used for display in the drop down.
        </p>
        <lk-panel>
            <lk-panel-body>
                <nodefault/>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="example1SampleScript"
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="example1SampleTemplate"
                    language="html"
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>
        <h3>Example with preselected value</h3>
        <lk-panel>
            <lk-panel-body>
                <preselected/>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="example2SampleScript"
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="example2SampleTemplate"
                    language="html"
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>
        <h3>Example with error</h3>
        <lk-panel>
            <lk-panel-body>
                <error/>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="example3SampleScript"
                    language="js"/>
            </lk-panel-body>
            <lk-panel-body
                padding="none"
                padding-bottom="none">
                <format-code
                    :code="example3SampleTemplate"
                    language="html"
                    rounded-bottom-corners/>
            </lk-panel-body>
        </lk-panel>
    </lk-content>
</template>

<script>
import error from '../../documentation/components/examples/search-select/Error';
import nodefault from '../../documentation/components/examples/search-select/NoDefault';
import preselected from '../../documentation/components/examples/search-select/Preselected';
import Code from '../../documentation/components/Code';

export default {
    components: {
        nodefault,
        preselected,
        error,
        formatCode: Code,
    },
    methods: {
        changedItem(item) {
            console.log(item);
        },
    },
    data() {
        return {
            example1SampleScript: `
// Component <script> content
export default {
    data() {
        return {
            selectedItem: {},
        };
    },
    methods: {
        changedItem(item) {
            this.selectedItem = item;
        },
        dataItems() {
            const dummyData = [];
            for (let index = 0; index < 50; index++) {
                dummyData.push({
                    id: index,
                    name: \`Example Item \${index}\`,
                });
            }
            return dummyData;
        },
    },
};
            `,
            example1SampleTemplate: `
<!-- Component <template> content -->
  <div>
    <lk-search-select
        :options="dataItems()"
        @selected="changedItem"
        placeholder="Select an option">
      <template slot="label">Simple Example</template>
      <template slot="hint">
        <p>This simple example shows a basic search select with a list of items.</p>
      </template>
    </lk-search-select>
    <lk-divider margin-bottom="content"/>
    <lk-content>
      <p>
        <em>Selected Item Name:</em>
        <strong>{{selectedItem.name}}</strong>
      </p>
      <lk-divider margin-bottom="content"/>
      <p>
        <em>Selected Item ID:</em>
        <strong>{{selectedItem.id}}</strong>
      </p>
    </lk-content>
  </div>
            `,

            example2SampleScript: `
// Component <script> content
export default {
    data() {
        return {
            selectedItem: this.dataItems()[3],
        };
    },
    methods: {
        changedItem(item) {
            this.selectedItem = item;
        },
        dataItems() {
            const dummyData = [
                {fruit: 'Apple'},
                {fruit: 'Banana'},
                {fruit: 'Clementine'},
                {fruit: 'Dragonfruit'},
                {fruit: 'Fig'},
                {fruit: 'Grape'},
                {fruit: 'Orange'},
                {fruit: 'Pear'},
                {fruit: 'Strawberry'},
                {fruit: 'Quince'},
            ];

            return dummyData;
        },
    },
};
`,

            example2SampleTemplate: `
<!-- Component <template> content -->
<div>
    <lk-search-select
        :options="dataItems()"
        @selected="changedItem"
        :selected-item="selectedItem"
        option-display-field="fruit"
        placeholder="Select an option"
    >
        <template slot="label">Example with Preselect</template>
        <template slot="hint">
        <p>This example shows a list of items with one preselected and a custom display field.</p>
        </template>
    </lk-search-select>

    <lk-divider margin-bottom="content"/>
    <lk-content>
        <p>
        <em>Selected Item Name:</em>
        <strong>{{selectedItem.fruit}}</strong>
        </p>
        <lk-divider margin-bottom="content"/>
    </lk-content>
</div>`,
            example3SampleScript: `
// Component <script> content
export default {
    data() {
        return {
            selectedItem: {},
        };
    },
    methods: {
        changedItem(item) {
            this.selectedItem = item;
        },
        inputHasError() {
            return true;
        },
        dataItems() {
            const dummyData = [];
            for (let index = 0; index < 50; index++) {
                dummyData.push({
                    id: index,
                    name: \`Example Item \${index}\`,
                });
            }
            return dummyData;
        },
    },
};
            `,
            example3SampleTemplate: `
<!-- Component <template> content -->
    <div>
        <lk-search-select
            :options="dataItems()"
            :has-error="inputHasError()"
            @selected="changedItem"
            placeholder="Select an option">
            <template slot="label">Simple Example</template>
            <template slot="hint">
                <p>This simple example shows a basic search select with a list of items.</p>
            </template>
            <template slot="error">
              <p>Error message</p>
            </template>
        </lk-search-select>
        <lk-divider margin-bottom="content"/>
        <lk-content>
            <p>
                <em>Selected Item Name:</em>
                <strong>{{selectedItem.name}}</strong>
            </p>
            <lk-divider margin-bottom="content"/>
            <p>
                <em>Selected Item ID:</em>
                <strong>{{selectedItem.id}}</strong>
            </p>
        </lk-content>
    </div>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import '../../styles/variables';
</style>
