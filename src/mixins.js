export const EasyNestedObject = {
    methods: {
        setNestedPathValue: function (obj, path, val) {
            const parts = path.split('.')
            parts.forEach((p, indexer) => {
                if (indexer === parts.length - 1) {
                    obj[p] = val
                } else {
                    if (!obj[p]) {
                        obj[p] = {}
                    }
                    obj = obj[p]
                }
            })
        },
        getNestedPathValue: function (item, path) {
            const parts = path.split('.')
            let val = item
            parts.forEach((p) => {
                if (val) {
                    val = val[p]
                }
            })
            return val
        },
        flattenObject: function (obj, depth = -1) {
            const out = {}
            const iterate = (nested, path, level) => {
                for (const prop in nested) {
                    if (nested[prop] instanceof Object && (level <= 0 || level < depth)) {
                        iterate(nested[prop], path + '.' + prop, level + 1)
                    } else {
                        out[path + '.' + prop] = nested[prop]
                    }
                }
            }
            iterate(obj, '', 0)

            return out
        }
    }
}

export const JSONWorkspace = {
    methods: {
        startJSONDownload: function (data) {
            return () => {
                console.log('download', data)
                const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data)
                const downloadAnchorNode = document.createElement('a')
                downloadAnchorNode.setAttribute('href', dataStr)
                downloadAnchorNode.setAttribute('download', 'schema.json')
                document.body.appendChild(downloadAnchorNode) // required for firefox
                downloadAnchorNode.click()
                downloadAnchorNode.remove()
            }
        },
        startJSONUpload: function (onUploaded) {
            return () => {
                const downloadAnchorNode = document.createElement('input')
                downloadAnchorNode.setAttribute('type', 'file')
                document.body.appendChild(downloadAnchorNode) // required for firefox
                downloadAnchorNode.click()
                downloadAnchorNode.addEventListener('change', function (event) {
                    const fileToRead = event.target
                    const files = fileToRead.files
                    if (files.length) {
                        const file = files[0]
                        const reader = new FileReader()
                        reader.onload = e => {
                            try {
                                const json = JSON.parse(e.target.result)
                                onUploaded(json)
                            } catch (e) {
                                console.error(e)
                            }
                        }
                        reader.readAsText(file)
                    }
                },
                false
                )
                downloadAnchorNode.remove()
            }
        }
    }
}
