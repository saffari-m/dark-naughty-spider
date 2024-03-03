// Tips for why this file exists:
// 
// we want to ship styled-components as external library to avoide having multiple instance of styled-components 
// according to this link(https://styled-components.com/docs/faqs#duplicated-module-in-node_modules). 
// to use our theme globaly in app, we need maintain the integrity of the themeProvider here between the ui-component and the used application.
// other wise we'll have two instance of styled-component Provider with separate themes.
// 
// this workaround fix the SSR issue with styled-component in next v12 (fixed in v13), that cause missing module 
// according to this (https://github.com/styled-components/styled-components/issues/3437) (https://github.com/styled-components/styled-components/issues/3601)
//
// also we need disable SSR in the app to avoids checksum mismatches due to different class generation (https://styled-components.com/docs/tooling#serverside-rendering) 
import styled from 'styled-components';

export * from 'styled-components';

const defaultStyled = typeof styled === 'function' ? styled : styled.default;

export { defaultStyled as default };