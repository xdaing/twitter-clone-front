import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                xs: '614px',
                sm: '1002px',
                md: '1022px',
                lg: '1092px',
                xl: '1280px',
            },
            colors: {
                twitter: {
                    50: '#5F99F7',
                    100: '#5F99F7',
                    200: '#38444d',
                    300: '#202e3a',
                    400: '#253341',
                    500: '#5F99F7',
                    600: '#5F99F7',
                    700: '#192734',
                    800: '#162d40',
                    900: '#15202b',
                }
            }
        }
    },
    shortcuts: {
        'defaultTransition': 'transition ease-in-out duration-350',
        'twitterBorderColor': 'border-white-200 dark:border-gray-700'
    },
})