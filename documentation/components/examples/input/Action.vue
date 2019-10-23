<template>
    <div>
        <lk-input
            placeholder="Action Slot example"
            show-action-items
            v-model="textValue"
        >
            <template slot="action">
                
                <lk-dropdown-button 
                    micro 
                    margin-bottom="none"
                    circle
                    :items="[
                        {
                            callback: () =>this.setInputText('Some Action'),
                            label: 'Some Action',
                        },
                        {
                            callback: () =>this.setInputText('Another Action'),
                            label: 'Another Action',
                        }
                    ]"
                    outline
                    right
                >
                    <lk-icon icon="ellipsis-v"/>
                </lk-dropdown-button>    
                  
            </template>
        </lk-input>

        <lk-input
            placeholder="Action Slot example"
            show-action-items
            v-model="crossInputText"
        >
            <template slot="action">
                
                <lk-button 
                    mini 
                    margin-bottom="none"
                    circle
                    danger
                    right
                    @click.native="crossClicked"
                >
                    <lk-icon icon="times"/>
                </lk-button>    
                  
            </template>
        </lk-input>

        <lk-input
            placeholder="Action Slot example"
            show-action-items
            v-model="plusMinusText"
        >
            <template slot="action">
                
                <lk-button 
                    micro 
                    margin-bottom="none"
                    circle
                    success
                    right
                    @click.native="plusMinusClicked('Plus Clicked')"
                >
                    <lk-icon icon="plus"/>
                </lk-button>    

                <lk-button 
                    micro 
                    margin-bottom="none"
                    circle
                    warning
                    right
                    @click.native="plusMinusClicked('Minus Clicked')"
                >
                    <lk-icon icon="minus"/>
                </lk-button>    
                  
            </template>
        </lk-input>
    </div>
</template>

<script>
export default {
    methods: {
        incrementCounter() {
            this.counter++;
        },
        setInputText(value) {
            this.textValue = value;
        },
        crossClicked() {
            this.crossInputText = 'Cross button clicked';
        },
        plusMinusClicked(value) {
            this.plusMinusText = value;
        },
    },
    data() {
        return {
            counter: 0,
            textValue: '',
            crossInputText: '',
            plusMinusText: '',
        };
    },
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';
</style>
