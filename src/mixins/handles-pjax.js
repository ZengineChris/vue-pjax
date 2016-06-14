import PjaxComponent from '../components/pjax';
import PjaxDirective from '../directives/pjax';

export default {

    components: {
        pjax: PjaxComponent,
    },

    directives: {
        pjax: PjaxDirective,
    },

    events: {
        ['pjax-insert']({ element, content }) {
            element.innerHTML = content;
            this.$compile(element);
        },
    },

};
