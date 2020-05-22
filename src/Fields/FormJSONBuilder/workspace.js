export default {
    methods: {
        onUploaded (data) {
            const tree = this.getFormSchemaFromFormJSON(data.schema)
            this.codeModel = data.code
            this.schema = { builder: tree }
            this.previewValues = data.values
        },
        onDownload () {
            this.startJSONDownload(
                JSON.stringify(
                    {
                        schema: this.formjson,
                        code: this.codeModel,
                        values: this.previewValues
                    },
                    null,
                    2
                )
            )()
        },
        onReset () {
            this.$refs.confirm
                .open(
                    'Reset',
                    'Are you sure you want to reset the Schema and Actions?',
                    {
                        color: 'red'
                    }
                )
                .then(confirm => {
                    if (confirm) {
                        const tree = this.field.tree
                            ? this.field.tree
                            : {
                                id: 'formjson',
                                type: 'vf-fields-renderer',
                                children: []
                            }
                        this.schema = {
                            builder: [this.treeModel.parse(JSON.parse(JSON.stringify(tree)))]
                        }
                        this.codeModel = ''
                        this.previewValues = {}
                    }
                })
        }
    }
}
