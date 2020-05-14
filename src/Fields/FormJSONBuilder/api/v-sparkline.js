export default {
    fields: {
        'auto-draw': {
            type: 'input',
            input: 'switch',
            label: 'Auto-draw',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Trace the length of the line when first rendered'
            }
        },
        'auto-draw-duration': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Auto-draw-duration',
            props: {
                hint: '**SELF** - Amount of time (in ms) to run the trace animation',
                placeholder: '2000'
            }
        },
        'auto-draw-easing': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Auto-draw-easing',
            props: {
                hint: '**SELF** - The easing function to use for the trace animation',
                placeholder: '\'ease\''
            }
        },
        'auto-line-width': {
            type: 'input',
            input: 'switch',
            label: 'Auto-line-width',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Automatically expand bars to use space eficiently'
            }
        },
        color: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Color',
            props: {
                hint: '**MIXIN (colorable)** - Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find list of built in classes on the [colors page](/styles/colors#material-colors).',
                placeholder: '\'primary\''
            }
        },
        fill: {
            type: 'input',
            input: 'switch',
            label: 'Fill',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Using the **fill** property allows you to better customize the look and feel of your sparkline.'
            }
        },
        'gradient-direction': {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Gradient-direction',
            props: {
                hint: '**SELF** - The direction the gradient should run',
                placeholder: '\'top\''
            }
        },
        'show-labels': {
            type: 'input',
            input: 'switch',
            label: 'Show-labels',
            class: 'col-4 mx-0',
            props: {
                hint: '**SELF** - Show labels below each data point'
            }
        },
        type: {
            type: 'input',
            input: 'text',
            class: 'col-12 mx-0',
            label: 'Type',
            props: {
                hint: '**SELF** - Choose between a trendline or bars',
                placeholder: '\'trend\''
            }
        }
    },
    slots: [
        {
            id: 'label',
            title: '**GENERIC (undefined)** - Replaces the default label'
        }
    ]
}
