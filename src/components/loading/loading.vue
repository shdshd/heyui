<template>
  <div :class="loadingCls">
    <div :class="circularCls">
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>
      </svg>
      <p :class="textCls" v-if="text">{{text}}</p>
    </div>
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefix = 'h-loading';
export default {
  name: 'hLoading',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: String,
    minHeight: Number
  },
  data() {
    return {
      isSetStyle: false
    }
  },
  unbind() {

  },
  mounted() {
    this.initStyle();
  },
  methods: {
    initStyle() {
      if (this.loading) {
        this.$nextTick(() => {
          utils.addClass(this.$el, 'h-loading-loading');
          utils.addClass(this.$el, 'h-loading-visible');
          let parent = this.$el.parentNode;
          let style = window.getComputedStyle(parent);
          let position = style.position;
          if (position === 'static') {
            parent.style.position = 'relative';
            this.isSetStyle = true;
          }
          if(!style.height && !style.minHeight) {
            parent.style.minHeight = this.minHeight ? `${this.minHeight}px` : '50px';
          }
        });
      } else {
        utils.removeClass(this.$el, 'h-loading-loading');
        setTimeout(() => {
          utils.removeClass(this.$el, 'h-loading-visible');
          if (this.isSetStyle) {
            let parent = this.$el.parentNode;
            parent.style.minHeight = '';
            parent.style.position = '';
          }
        }, 500);
      }
    }
  },
  watch: {
    loading() {
      this.initStyle();
    }
  },
  computed: {
    circularCls() {
      return {
        [`${prefix}-circular`]: true,
      };
    },
    textCls() {
      return {
        [`${prefix}-text`]: true,
      };
    },
    loadingCls() {
      return {
        [`${prefix}`]: true
      };
    }
  }
};
</script>
