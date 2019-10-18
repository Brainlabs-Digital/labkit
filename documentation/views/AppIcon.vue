<template>
    <lk-content>
        <h1>Application Icon</h1>
        <p>
            The Application Icon component (
            <code>lk-app-icon</code>)&hellip;
        </p>
        <h3>Styling</h3>
        <p>The size of an application icon is defined by the font size.</p>

        <lk-panel>
            <lk-panel-body>
                <example-sizes />
            </lk-panel-body>
        </lk-panel>
        <lk-panel-body 
            padding="none" 
            padding-bottom="none">
            <format-code 
                :code="exampleSizesTemplateCode" 
                language="html" 
                rounded-bottom-corners />
        </lk-panel-body>

        <h3>Available Icons</h3>
        <lk-panel>
            <lk-panel-body>
                <example />
            </lk-panel-body>
        </lk-panel>

        <lk-panel-body 
            padding="none" 
            padding-bottom="none">
            <format-code 
                :code="exampleTemplateCode" 
                language="html" 
                rounded-bottom-corners />
        </lk-panel-body>
    </lk-content>
</template>

<script>
import Example from '../../documentation/components/examples/app-icon/Example';
import ExampleSizes from '../../documentation/components/examples/app-icon/ExampleSizes';
import Code from '../../documentation/components/Code';

export default {
    components: {
        Example,
        ExampleSizes,
        formatCode: Code,
    },
    data() {
        return {
            exampleScriptCode: `
export default {
    components: {
        //     formatCode: Code,
    },
    data() {
        return {
            applications: [
                {name: '247_bidder', description: '24/7 Bidder'},
                {name: 'spell_checker', description: 'Spell Checker'},
                {
                    name: 'big_red_stop_button',
                    description: 'Big Red Stop Button',
                },
                {
                    name: 'experiments_dashboard',
                    description: 'Experiments Dashboard',
                },
                {name: 'negative_lists', description: 'Negative Lists'},
				{name: 'structure_checker', description: 'Structure Checker'},
				{name: 'sqrt', description: 'Search Query Tool'},
                {name: 'url_checker', description: 'URL Checker'},
            ],
        };
    },
};
			`,
            exampleTemplateCode: `
<lk-content>
<template v-for="(icon, index) in applications">
	<div :key="icon.name">
	<span :class="$style['icon-title']">{{icon.description}}</span>
	<p :key="icon.name">
		<span :class="$style.container">
		<lk-app-icon :application="icon.name"></lk-app-icon>
		</span>
		<span :class="$style['icon-name']">{{icon.name}}</span>
	</p>
	</div>
	<lk-divider
	v-if="index < applications.length - 1"
	:key="\`\${icon.name}-divider\`"
	margin-bottom="content"
	/>
</template>
</lk-content>
			`,
            exampleSizesTemplateCode: `
<lk-content>
	<span style="font-size: 1em;">
		<lk-app-icon application="experiments_dashboard"></lk-app-icon>
	</span>
	<span style="font-size: 2em;">
		<lk-app-icon application="experiments_dashboard"></lk-app-icon>
	</span>
	<span style="font-size: 3em;">
		<lk-app-icon application="experiments_dashboard"></lk-app-icon>
	</span>
	<span style="font-size: 4em;">
		<lk-app-icon application="experiments_dashboard"></lk-app-icon>
	</span>
	<span style="font-size: 5em;">
		<lk-app-icon application="experiments_dashboard"></lk-app-icon>
	</span>
</lk-content>
            `,
        };
    },
};
</script>

<style module lang="scss">
@import 'styles/variables';
</style>
