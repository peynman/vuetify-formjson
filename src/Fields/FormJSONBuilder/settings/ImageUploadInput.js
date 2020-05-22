import {
    CommonInputEssentials,
    MessagesTab,
    BaseInputSettings,
    SwitchSettings,
    TextSettings,
    ColorSettings
} from './comon'

export default class ImageUploadInputSettings extends BaseInputSettings {
    getInputSlots () {
        return []
    }

    getInputEventGroupsList () {
        return []
    }

    getInputProperties () {
        return {
            ...CommonInputEssentials,
            props: {
                options: {
                    type: 'row',
                    formClass: 'ma-0 pa-0'
                },
                fields: {
                    fullWidth: SwitchSettings('Full width'),
                    fullHeight: SwitchSettings('Full height'),
                    hideActions: SwitchSettings('Hide Actions'),
                    clearable: SwitchSettings('Clearable'),
                    clearIcon: TextSettings('Clear Icon'),
                    disabled: SwitchSettings('Disabled'),
                    readonly: TextSettings('Readonly'),
                    debounce: TextSettings('Debounce'),
                    flipHorizontallyIcon: TextSettings('Flip Horizontally Icon'),
                    flipVerticallyIconStyle: TextSettings('Flip Vertically Icon Style'),
                    imageQuality: TextSettings('Image Quality'),
                    imageFormat: TextSettings('Image Format'),
                    imageWidth: TextSettings('Image Width'),
                    imageHeight: TextSettings('Image Height'),
                    imageMaxScaling: TextSettings('Image Max Scaling'),
                    imageMinScaling: TextSettings('Image Min Scaling'),
                    imageBackgroundColor: ColorSettings('Image Background Color'),
                    overlayBackgroundColor: ColorSettings('Overlay Background Color'),
                    overlayBorderColor: ColorSettings('Overlay Border Color'),
                    overlayBorderWidth: TextSettings('Overlay Border Width'),
                    overlayPadding: TextSettings('Overlay Padding'),
                    rotateClockwiseIcon: TextSettings('Overlay Padding'),
                    rotateCounterClockwiseIcon: TextSettings('Overlay Padding'),
                    scalingSliderColor: ColorSettings('Scaling Slider Color'),
                    messages: MessagesTab
                }
            }
        }
    }
}
