<template>
    <lk-panel>
        <lk-panel-body>
            <lk-content>
                <template v-for="(icon, index) in applications">
                    <div :key="icon.name">
                        <span :class="$style['icon-title']">{{icon.description}}</span>
                        <p :key="icon.name">
                            <span :class="$style.container">
                                <lk-app-icon :application="icon.name" />
                            </span>
                            <span :class="$style['icon-name']">{{icon.name}}</span>
                        </p>
                    </div>
                    <lk-divider
                        v-if="index < applications.length - 1"
                        :key="`${icon.name}-divider`"
                        margin-bottom="content"
                    />
                </template>
            </lk-content>
        </lk-panel-body>
    </lk-panel>
</template>


<script>
// import Code from '../../../../documentation/components/Code';

export default {
    components: {
        //     formatCode: Code,
    },
    data() {
        return {
            applications: [
                {name: '247_bidder', description: '24/7 Bidder'},
                {name: 'anomoly_checker', description: 'Anomoly Checker'},
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
                {name: 'sqrt', description: 'SQRT'},
                {name: 'url_checker', description: 'URL Checker'},
            ],
        };
    },
};
</script>

<style module lang="scss">
@import 'src/labkit/styles/variables';

.container {
    font-size: 30px;
}

.icon-title {
    font-size: font-size(sub-heading);
}

.icon-name {
    background: background-color(muted);
    border-radius: 0.3rem;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
        'Courier New', monospace;
    font-size: 1.4rem;
    font-weight: bold;
    padding: 0.4rem 0.6rem;
    white-space: nowrap;
    vertical-align: baseline;
}
</style>
