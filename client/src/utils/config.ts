import env from 'env-var';

// Keep this object alphabetically sorted.
export enum ConfigKey {
    EMAILJS_SERVICE_ID = 'EMAILJS_SERVICE_ID',
    EMAILJS_TEMPLATE_ID = 'EMAILJS_TEMPLATE_ID',
    EMAILJS_PUBLIC_KEY = 'EMAILJS_PUBLIC_KEY',
}

export const config = {
    // required env vars
    emailJsServiceId: () => env.get(ConfigKey.EMAILJS_SERVICE_ID).required().asString(),
    emailJsTemplateId: () => env.get(ConfigKey.EMAILJS_TEMPLATE_ID).required().asString(),
    emailJsPublicKey: () => env.get(ConfigKey.EMAILJS_PUBLIC_KEY).required().asString(),
};
