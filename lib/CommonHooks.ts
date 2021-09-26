import { watch } from '@nuxtjs/composition-api';

export function useScrollToTop(val: object) {
  watch(val, () => {
    window.scrollTo({ top: 0 });
  });
}
