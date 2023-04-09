import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const getFile = (url) => `${publicRuntimeConfig.backendUrl}/${url}`;