
import { Component, Vue } from "vue-property-decorator"
import MyButton from '../button/index.vue';


@Component({
    components: { MyButton }
})

export class Header extends Vue {
    closeButtonClick() {
        this.$emit('closebuttonclick')
        this.$emit('update:isOpen', false)
    }
}

