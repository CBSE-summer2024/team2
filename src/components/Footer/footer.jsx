import React, { useEffect } from 'react';
import { createApp } from 'vue';
import Footer from './footer.vue';

const FooterIntgration = () => {
    useEffect(() => {
        const vueApp = createApp(Footer);
        vueApp.mount('#vue-root');
        return () => {
            vueApp.unmount();
        };
    }, []);

    return (
        <div>
            <vueApp></vueApp>
        </div>
    );
};

export default FooterIntgration;
