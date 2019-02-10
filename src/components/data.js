import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['resource', 'resourcegain','tickrate','towntype','title','currency'])
  }
}