<template>
  <div>
      <lk-button @click.native="toggleSmallModalIsVisible">Show small modal</lk-button>
      <lk-button @click.native="toggleMediumModalIsVisible">Show medium modal (Default size)</lk-button>
      <lk-button @click.native="toggleLargeModalIsVisible">Show large modal</lk-button>
      <lk-button @click.native="toggleExtraLargeModalIsVisible">Show extra large modal</lk-button>
    <lk-modal v-if="smallModalIsVisible === true" @closed="toggleSmallModalIsVisible" size="sm">
      <lk-panel-header>
        <template slot="title">Small modal</template>
        <template slot="subtitle">Modal subtitle</template>
      </lk-panel-header>
      <lk-panel-body>
        <lk-content>
          <p>Example modal content.</p>
        </lk-content>
      </lk-panel-body>
      <lk-panel-footer>
        <lk-button
          danger
          margin-bottom="none"
          outline
          @click.native="toggleSmallModalIsVisible"
        >Secondary action</lk-button>
        <lk-button
          margin-bottom="none"
          primary
          @click.native="toggleSmallModalIsVisible"
        >Primary action</lk-button>
      </lk-panel-footer>
    </lk-modal>
    <lk-modal v-if="mediumModalIsVisible === true" @closed="toggleMediumModalIsVisible" size="md">
      <lk-panel-header>
        <template slot="title">Medium modal</template>
        <template slot="subtitle">Modal subtitle</template>
      </lk-panel-header>
      <lk-panel-body>
        <lk-content>
          <p>Example modal content.</p>
        </lk-content>
      </lk-panel-body>
      <lk-panel-footer>
        <lk-button
          danger
          margin-bottom="none"
          outline
          @click.native="toggleMediumModalIsVisible"
        >Secondary action</lk-button>
        <lk-button
          margin-bottom="none"
          primary
          @click.native="toggleMediumModalIsVisible"
        >Primary action</lk-button>
      </lk-panel-footer>
    </lk-modal>
    <lk-modal v-if="largeModalIsVisible === true" @closed="toggleLargeModalIsVisible" size="lg">
      <lk-panel-header>
        <template slot="title">Large modal</template>
        <template slot="subtitle">Modal subtitle</template>
      </lk-panel-header>
      <lk-panel-body>
        <lk-content>
          <p>Example modal content.</p>
        </lk-content>
      </lk-panel-body>
      <lk-panel-footer>
        <lk-button
          danger
          margin-bottom="none"
          outline
          @click.native="toggleLargeModalIsVisible"
        >Secondary action</lk-button>
        <lk-button
          margin-bottom="none"
          primary
          @click.native="toggleLargeModalIsVisible"
        >Primary action</lk-button>
      </lk-panel-footer>
    </lk-modal>
    <lk-modal
      v-if="extraLargeModalIsVisible === true"
      @closed="toggleExtraLargeModalIsVisible"
      size="xl"
    >
      <lk-panel-header>
        <template slot="title">Extra large modal</template>
        <template slot="subtitle">Modal subtitle</template>
      </lk-panel-header>
      <lk-panel-body>
        <lk-content>
          <p>Example modal content.</p>
        </lk-content>
      </lk-panel-body>
      <lk-panel-footer>
        <lk-button
          danger
          margin-bottom="none"
          outline
          @click.native="toggleExtraLargeModalIsVisible"
        >Secondary action</lk-button>
        <lk-button
          margin-bottom="none"
          primary
          @click.native="toggleExtraLargeModalIsVisible"
        >Primary action</lk-button>
      </lk-panel-footer>
    </lk-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smallModalIsVisible: false,
      mediumModalIsVisible: false,
      largeModalIsVisible: false,
      extraLargeModalIsVisible: false
    };
  },
  methods: {
    toggleSmallModalIsVisible() {
      this.smallModalIsVisible = !this.smallModalIsVisible;
    },
    toggleMediumModalIsVisible() {
      this.mediumModalIsVisible = !this.mediumModalIsVisible;
    },
    toggleLargeModalIsVisible() {
      this.largeModalIsVisible = !this.largeModalIsVisible;
    },
    toggleExtraLargeModalIsVisible() {
      this.extraLargeModalIsVisible = !this.extraLargeModalIsVisible;
    }
  }
};
</script>

<style module lang="scss">
@import '../../../../styles/variables';

.button-spacing {
  margin-right: 5px;
}
</style>
