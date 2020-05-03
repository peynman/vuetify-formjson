const sampleSelect = []
for (let i = 1; i <= 15; i++) {
    sampleSelect.push({
        id: '#' + i,
        title: 'Option ' + i
    })
}

var ProfilesJSON = {
    treeview1: {
        type: 'group',
        group: 'treeview',
        label: 'Sample Treeview with action sidebar',
        drawerProps: {
            right: true,
            width: '400px'
        },
        options: {
            type: 'col',
            class: 'ma-4'
        },
        iconProps: {
            'x-small': true
        },
        btnProps: {
            small: true
        },
        actions: {
            prepend: {
                create: {
                    type: 'form',
                    icon: 'add',
                    fields: {
                        firstname: {
                            type: 'input',
                            input: 'text',
                            label: 'Firstname'
                        },
                        lastname: {
                            type: 'input',
                            input: 'text',
                            label: 'Lastname'
                        }
                    }
                },
                settings: {
                    icon: 'settings',
                    fields: {
                        firstname: {
                            type: 'input',
                            input: 'text',
                            label: 'Firstname'
                        },
                        lastname: {
                            type: 'input',
                            input: 'text',
                            label: 'Lastname'
                        }
                    }
                }
            }
        },
        props: {
            items: [
                {
                    id: '#1',
                    title: 'Group 1',
                    children: [
                        {
                            id: '#2',
                            title: 'inner 1'
                        },
                        {
                            id: '#3',
                            title: 'inner 2'
                        }
                    ]
                }
            ],
            'item-text': 'title',
            'item-key': 'id',
            'open-all': true
        }
    },
    datatable: {
        type: 'input',
        input: 'datatable',
        label: 'Sample data table',
        props: {
            'show-select': true
        },
        columns: [{
            title: 'Text 1',
            column: 'text1',
            sortable: true,
            width: 10
        }, {
            title: 'Color 1',
            column: 'color1',
            sortable: true,
            width: 10
        }],
        remove: {
            title: 'Are you sure you want to remove items?',
            accept: 'Yes',
            cancel: 'Cancel'
        },
        edit: {},
        create: {
            title: 'Create new Objects',
            fields: {
                text1: {
                    type: 'input',
                    input: 'text',
                    label: 'Text Field',
                    props: {
                        placeholder: 'Text Field placeholder'
                    }
                },
                color1: {
                    type: 'input',
                    input: 'color',
                    label: 'Sample Color',
                    props: {
                        placeholder: 'Select a color or enter one'
                    }
                },
                text2: {
                    type: 'input',
                    input: 'text',
                    label: 'Text Field',
                    props: {
                        placeholder: 'Text Field placeholder'
                    }
                },
                color2: {
                    type: 'input',
                    input: 'color',
                    label: 'Sample Color',
                    props: {
                        placeholder: 'Select a color or enter one'
                    }
                }
            }
        }
    },
    personal: {
        type: 'group',
        group: 'single-exp',
        label: 'Personal Information',
        fields: {
            firstname: {
                type: 'input',
                input: 'text',
                label: 'Firstname'
            },
            lastname: {
                type: 'input',
                input: 'text',
                label: 'Lastname'
            }
        }
    },
    expansions: {
        type: 'group',
        group: 'tabs',
        label: 'Contact informations',
        groups: {
            address: {
                label: 'Address',
                fields: {
                    address1: {
                        type: 'input',
                        input: 'text',
                        label: 'Address 1'
                    },
                    address2: {
                        type: 'input',
                        input: 'text',
                        label: 'Address 2'
                    }
                }
            },
            phone: {
                label: 'Numbers',
                fields: {
                    home: {
                        type: 'input',
                        input: 'text',
                        label: 'Home number'
                    },
                    mobile: {
                        type: 'input',
                        input: 'text',
                        label: 'Mobile number'
                    }
                }
            }
        }
    },

    text1: {
        type: 'input',
        input: 'text',
        label: 'Text Field',
        props: {
            placeholder: 'Text Field placeholder'
        }
    },
    color1: {
        type: 'input',
        input: 'color',
        label: 'Sample Color',
        props: {
            placeholder: 'Select a color or enter one'
        }
    },
    tabs1: {
        type: 'group',
        group: 'tabs',
        label: 'Tabbed input groups',
        groups: {
            info: {
                label: 'Personal info',
                fields: {
                    firstname: {
                        type: 'input',
                        input: 'text',
                        label: 'Firstname'
                    },
                    lastname: {
                        type: 'input',
                        input: 'text',
                        label: 'Lastname'
                    }
                }
            },
            card: {
                label: 'Credit Card Info',
                fields: {
                    'card-number': {
                        type: 'input',
                        input: 'text',
                        label: 'Card number'
                    },
                    ccv: {
                        type: 'input',
                        input: 'text',
                        label: 'CCV'
                    }
                }
            }

        }
    },
    select1: {
        type: 'input',
        input: 'select',
        label: 'Sample Select',
        class: 'col-12 pb-0 pl-0 pr-0',
        objects: sampleSelect,
        props: {
            clearable: true
        }
    },
    range1: {
        type: 'input',
        input: 'range',
        label: 'Sample Range',
        props: {
            min: -12,
            max: 12
        }
    },
    autocomplete1: {
        type: 'input',
        input: 'autocomplete',
        label: 'Sample Autocomplete',
        class: 'col-12 pb-0 pl-0 pr-0',
        objects: sampleSelect,
        props: {
            multiple: true
        }
    },
    multitext1: {
        type: 'input',
        input: 'multitext',
        label: 'Sample Multi mode text input',
        slot: 'prepend',
        class: 'col-12 pb-0 pl-0 pr-0',
        props: {
            placeholder: 'Placeholder'
        },
        modes: [{
            id: 'en',
            abbr: 'En',
            title: 'English'
        },
        {
            id: 'fa',
            abbr: 'Fa',
            title: 'Farsi',
            props: {
                placeholder: 'Placeholder Farsi'
            }
        }
        ]
    },
    checkbox1: {
        type: 'input',
        input: 'checkbox',
        label: 'Sample Chebkox',
        props: {
            error: true,
            'error-messages': ['Welcome']
        }
    },
    toggle1: {
        type: 'input',
        input: 'switch',
        label: 'Sample Toggle'
    },
    objects1: {
        type: 'input',
        input: 'objects-list',
        label: 'Sample objects list',
        objects: sampleSelect.slice(5)
    },
    radiogroup1: {
        type: 'input',
        input: 'radio-group',
        label: 'Sample Radio group',
        objects: sampleSelect.slice(0, 4)
    },
    bitwise1: {
        type: 'input',
        input: 'bitwise-flags',
        label: 'Bitwise flags sample',
        decorator: {
            id: 'id',
            title: 'title',
            label: ':title'
        },
        objects: [{
            id: 1,
            title: 'Flag A'
        },
        {
            id: 2,
            title: 'Flag B'
        },
        {
            id: 4,
            title: 'Flag C'
        },
        {
            id: 8,
            title: 'Flag D'
        },
        {
            id: 16,
            title: 'Flag E'
        },
        {
            id: 32,
            title: 'Flag C'
        }
        ]
    },
    buttonGrp1: {
        type: 'input',
        input: 'select-button',
        label: 'Sample toggle button',
        objects: [{
            icon: 'add',
            props: {
                'x-small': true
            },
            iconProps: {
                'x-small': true
            }
        },
        {
            icon: 'close',
            props: {
                'x-small': true
            },
            iconProps: {
                'x-small': true
            }
        },
        {
            icon: 'minimize',
            props: {
                'x-small': true
            },
            iconProps: {
                'x-small': true
            }
        }
        ],
        props: {
            multiple: true
        }
    },
    imgUpload1: {
        type: 'input',
        input: 'image-upload',
        label: 'Profile picture',
        class: 'col-12',
        props: {
            clearable: true
        }
    }

}
