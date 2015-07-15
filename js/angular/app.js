var app = angular.module('StarterApp', ['ngMaterial']);

app.config(function($mdIconProvider, $mdThemingProvider) {

    /* $mdThemingProvider.theme('default')
       .primaryPalette('#1ab394')
       .accentPalette('orange');*/


    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('nGreen', {
        '50': '1ab394',
        '100': '1ab394',
        '200': '1ab394',
        '300': '1ab394',
        '400': '1ab394',
        '500': '1ab394',
        '600': '1ab394',
        '700': '1ab394',
        '800': '1ab394',
        '900': '1ab394',
        'A100': '1ab394',
        'A200': '1ab394',
        'A400': '1ab394',
        'A700': '1ab394',
        'contrastDefaultColor': 'light',

    });

    $mdThemingProvider.definePalette('nViolet', {
        '50': '106CC8',
        '100': '106CC8',
        '200': '106CC8',
        '300': '106CC8',
        '400': '106CC8',
        '500': '106CC8',
        '600': '106CC8',
        '700': '106CC8',
        '800': '106CC8',
        '900': '106CC8',
        'A100': '106CC8',
        'A200': '106CC8',
        'A400': '106CC8',
        'A700': '106CC8',
        'contrastDefaultColor': 'light',

    });


    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
        .primaryPalette('nGreen')
        .accentPalette('pink');

    $mdThemingProvider.theme('modalTool')
        .primaryPalette('nViolet');
});
